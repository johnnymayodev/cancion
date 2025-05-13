import prisma from "@/utilities/database";
import { v4 as uuidv4 } from "uuid";

import env from "@/utilities/env";

import type { GeniusOptions, Lyric } from "#/types";
import { getLyricsFromGenius } from "@/utilities/genius";

export const getLyric = async (SongUUID: string) => {
  const lyric = await prisma.lyric.findFirst({
    where: { SongUUID },
  });

  if (!lyric) {
    const song = await prisma.song.findFirst({
      where: { UUID: SongUUID },
    });

    if (!song) {
      return "No song found";
    }

    if (!env.GENIUS_API_KEY) {
      return "Lyric Service: GENIUS_API_KEY is not set";
    }

    const geniusOptions: GeniusOptions = {
      apiKey: env.GENIUS_API_KEY,
      title: song.Title,
      artist: song.Artist,
      optimizeQuery: true,
      authHeader: true,
    };

    const geniusLyric = await getLyricsFromGenius(geniusOptions, SongUUID);

    const savedLyric = await saveLyric(geniusLyric);

    return savedLyric;
  }

  return lyric;
};

export const saveLyric = async (lyric: Lyric) => {
  const UUID = uuidv4();

  const savedLyric = await prisma.lyric.create({
    data: {
      ...lyric,
      UUID,
    },
  });
  return savedLyric;
};

export default { getLyric, saveLyric };

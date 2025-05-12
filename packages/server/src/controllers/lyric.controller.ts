import type { Context } from "hono";
import { configDotenv } from "dotenv";

configDotenv();

import lyricService from "@/services/lyric.service";

import type { GeniusOptions } from "#/types";

import { getLyricsFromGenius } from "@/utilities/genius";
import songService from "@/services/song.service";

export const getLyric = async (c: Context) => {
  const { SongUUID } = c.req.param();
  if (!SongUUID) {
    return c.json({ error: "SongUUID is required" }, 400);
  }

  const lyric = await lyricService.getLyric(SongUUID);

  if (!lyric) {
    if (!process.env.GENIUS_API_KEY) {
      return c.json({ error: "GENIUS_API_KEY is not set" }, 500);
    }

    const song = await songService.getSong(SongUUID);

    if (!song) {
      return c.json({ error: "Song not found" }, 404);
    }

    const geniusOptions: GeniusOptions = {
      apiKey: process.env.GENIUS_API_KEY,
      title: song.Title,
      artist: song.Artist,
      optimizeQuery: true,
      authHeader: false,
    };

    const geniusLyric = await getLyricsFromGenius(geniusOptions, SongUUID);

    const savedLyric = await lyricService.saveLyric(geniusLyric);

    return c.json(savedLyric);
  }

  return c.json(lyric);
};

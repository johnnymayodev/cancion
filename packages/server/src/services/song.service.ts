import prisma from "@/utilities/database";
import { v4 as uuidv4 } from "uuid";

import type { Song } from "#/types";

export const getSong = async (id: string) => {
  const song = await prisma.song.findUnique({
    where: { ID: parseInt(id) },
  });
  return song;
};

export const getSongFromURL = async (url: string) => {
  const song = await prisma.song.findFirst({
    where: { AppleMusicURL: url },
  });
  return song;
};

export const getSongs = async () => {
  const songs = await prisma.song.findMany();
  return songs;
};

export const saveSong = async (song: Song) => {
  const UUID = uuidv4();

  const savedSong = await prisma.song.create({
    data: {
      ...song,
      UUID,
    },
  });
  return savedSong;
};

export default { getSong, getSongFromURL, getSongs, saveSong };

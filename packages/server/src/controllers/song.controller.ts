import type { Context } from "hono";

import songService from "@/services/song.service";

export const getSong = async (c: Context) => {
  const { id } = c.req.param();
  if (!id) {
    return c.json({ error: "ID is required" }, 400);
  }
  const song = await songService.getSong(id);

  return c.json(song);
};

export const getSongs = async (c: Context) => {
  const songs = await songService.getSongs();
  return c.json(songs);
};

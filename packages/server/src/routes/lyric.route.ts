import { Hono } from "hono";

import { getLyric } from "@/controllers/lyric.controller";

const lyric = new Hono();

lyric.get("/:SongUUID", getLyric);

export default lyric;

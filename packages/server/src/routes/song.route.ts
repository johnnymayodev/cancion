import { Hono } from "hono";

import {
  getSong,
  getSongs,
  getSongFromURL,
} from "@/controllers/song.controller";

const song = new Hono();

song.get("/url/:title/:albumID", getSongFromURL);
song.get("/", getSongs);
song.get("/:id", getSong);

export default song;

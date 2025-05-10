import { Hono } from "hono";

import { getSong, getSongs } from "@/controllers/song.controller";

const song = new Hono();

song.get("/:id", getSong);
song.get("/", getSongs);

export default song;

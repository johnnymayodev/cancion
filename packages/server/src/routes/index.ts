import { Hono } from "hono";

import song from "@/routes/song.route";
import lyric from "@/routes/lyric.route";

const routes = new Hono();

routes.route("/song", song);
routes.route("/lyric", lyric);

export default routes;

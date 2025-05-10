import { Hono } from "hono";

import song from "@/routes/song.route";

const routes = new Hono();

routes.route("/song", song);

export default routes;

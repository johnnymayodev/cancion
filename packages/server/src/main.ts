import { Hono } from "hono";
import { cors } from "hono/cors";

import routes from "@/routes";

export default function create(app: Hono): Hono {
  app.use(
    "/*",
    cors({
      origin: ["http://localhost:8000", "https://cancion.johnnymayo.com/"],
    }),
  );
  app.route("/api", routes);

  return app;
}

import { Hono } from "hono";
import { cors } from "hono/cors";

import routes from "@/routes";

export default function create(app: Hono): Hono {
  app.use(
    "/*",
    cors({
      origin: ["http://localhost:8000"],
    }),
  );
  app.route("/", routes);

  return app;
}

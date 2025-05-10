import { Hono } from "hono";

import routes from "@/routes";

export default function create(app: Hono): Hono {
  app.route("/", routes);

  return app;
}

import { Hono } from "hono";
import { cors } from "hono/cors";

import routes from "@/routes";

export default function create(app: Hono): Hono {
  app.use("/*", cors());

  app.route("/api", routes);

  app.get("/health", (c) => {
    return c.json(
      {
        message: "I'm doing great! Thank you for asking!",
        uptime: process.uptime().toFixed(4),
      },
      200,
    );
  });

  return app;
}

import { Hono } from "hono";
import { cors } from "hono/cors";

import routes from "@/routes";

export default function create(app: Hono): Hono {
  app.use(
    "/*",
    cors({
      origin: [
        "https://cancion.johnnymayo.com",
        "https://apicancion.johnnymayo.com",
        "http://localhost:8000",
      ],
      allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      allowHeaders: ["Content-Type", "Authorization"],
      exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
      maxAge: 600,
      credentials: true,
    }),
  );

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

import { Hono } from "hono";
import { configDotenv } from "dotenv";

import create from "@/main";

configDotenv();

const app = create(new Hono());

export default app;

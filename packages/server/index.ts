import { Hono } from "hono";

import create from "@/main";

const app = create(new Hono());

export default app;

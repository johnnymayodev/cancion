import { createBrowserRouter } from "react-router";

import Index from "@/pages/Index";
import Lyrics from "@/pages/Lyrics";

const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    Component: Index,
  },
  {
    path: "/lyrics",
    Component: Lyrics,
  },
]);

export default router;

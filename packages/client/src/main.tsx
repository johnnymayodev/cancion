import { scan } from "react-scan";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import router from "@/routes";

import { ThemeProvider } from "@/components/utilities/ThemeProvider";

import "@/index.css";
import "@/App.css";

scan({
  enabled: true,
  log: false,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);

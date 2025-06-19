import React from "react";
import { createRoot } from "react-dom/client";
import { AnimalProvider } from "./context/AnimalContext";
import { RouterProvider } from "react-router";
import { router } from "./router/router";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AnimalProvider>
      <RouterProvider router={router} />
    </AnimalProvider>
  </React.StrictMode>
);
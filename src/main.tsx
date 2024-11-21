import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import React from "react";

const rootElem = document.getElementById("root");

if (!rootElem) {
  throw new Error("No root");
}

createRoot(rootElem).render(
  <StrictMode>
    <React.Suspense fallback={"loading"}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.Suspense>
  </StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Swigy_router from "./Swigy_router";
createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Swigy_router />
  </StrictMode>
);

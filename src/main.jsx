import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import One from "./One.jsx";
import Two from "./Two.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <One /> */}
    <Two/>
  </StrictMode>
);

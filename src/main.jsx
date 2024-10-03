import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import One from "./One.jsx";
import Two from "./Two.jsx";
import Three from "./Three.jsx";
import Four from "./Four.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <One /> */}
    {/* <Two/> */}
    {/* <Three/> */}
    <Four/>
  </StrictMode>
);

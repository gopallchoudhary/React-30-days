import React from "react";
import { Home, Contact, About, Nav } from "./components/index";
import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Nav />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
    </>
  )
);

function Nine() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Nine;

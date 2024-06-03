import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from "react-dom/client";
import './components/index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home";

import Layout from "./Layout";
// import Contact from "./components/Contact";
// import About from "./components/About";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      {/* <Route path="...." element={<About />} />
      <Route path="...." element={<Contact/>} /> */}
      
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
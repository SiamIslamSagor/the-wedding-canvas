import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root/Root";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import AuthProvider from "./AuthProvider/AuthProvider";
import Wedding from "./components/Wedding/Wedding";
import Gallery from "./components/Gallery/Gallery";
import Rooms from "./components/Rooms/Rooms";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";
import PrivetRoute from "./components/PrivetRoute/PrivetRoute";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/service_details",
        element: (
          <PrivetRoute>
            <ServiceDetails></ServiceDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/wedding",
        element: <Wedding></Wedding>,
      },
      {
        path: "/gallery",
        element: (
          <PrivetRoute>
            <Gallery></Gallery>
          </PrivetRoute>
        ),
      },
      {
        path: "/rooms",
        element: (
          <PrivetRoute>
            <Rooms></Rooms>
          </PrivetRoute>
        ),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);

import React from "react";
import { createRoot } from "react-dom/client";

import { createHashRouter, RouterProvider } from "react-router-dom";

// Routes
import App from "./src/App";
import Error from "./src/components/Error";
import { Login } from "./src/components/Login";
import Navbar from "./src/components/Navbar";
import Landing from "./src/components/Landing";
import GetKlusterInfo from "./src/components/GetKlusterInfo";
import ViewSelector from "./src/components/ViewSelector";
import Dashboard from "./src/components/Dashboard";

const router = createHashRouter([
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "cluster",
    element: <GetKlusterInfo />,
    errorElement: <Error />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    errorElement: <Error />,
  },
]);

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import React from 'react';
import { createRoot } from 'react-dom/client';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

// Routes
import App from './src/App';
import Error from './src/components/Error';
import { Login } from './src/components/Login';
import Navbar from './src/components/Navbar';
import Landing from './src/components/Landing';
import Splash from './src/components/Splash';
import GetKlusterInfo from './src/components/GetKlusterInfo';
import ViewSelector from './src/components/ViewSelector';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
        errorElement: <Error />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "cluster",
        element: <GetKlusterInfo />
    },
    {
        path: "dashboard",
        element: <ViewSelector />
    }
]);





const rootElement = document.getElementById('root');
createRoot(rootElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>

);

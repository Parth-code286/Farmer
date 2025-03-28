import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Weather } from "./pages/Weather";
import { About } from "./pages/About";
import { Live } from "./pages/Live";
import { RegistrationReact } from "./pages/Registration";
import { Market } from "./pages/Market";
import { AppLayout } from "./components/layout/AppLayout";
import "./App.css";
import { Contact, contactData } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";
import { GetApi } from "./components/api/GetApi";
import { LoginReact } from "./pages/LoginPage";
import { Chatbot } from "./pages/Chatbot";

export const App = () => {
    
    const router = createBrowserRouter([
        {
            path: '/',
            element: <AppLayout />,
            errorElement: <ErrorPage />,
            children: [
                { path: '/about', element: <About /> },
                { 
                    path: '/weather', 
                    element: <Weather />, 
                    loader: GetApi 
                },
                { path: '/live', element: <Live /> },
                { path: '/chatbot', element: <Chatbot /> },
                { path: '/market', element: <Market /> },
                { path: '/signup', element: <RegistrationReact /> },
                { path: '/login', element: <LoginReact/> },
                { path: '/contact', element: <Contact /> , action:contactData }
            ],
        },
    ]);

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <RouterProvider router={router} />
        </Suspense>
    );
};
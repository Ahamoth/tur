import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import UserMain from "https://ahamoth.github.io/tur/pages/userMain/UserMain";
import Login from "https://ahamoth.github.io/tur/pages/login/Login";
import Registration from "https://ahamoth.github.io/tur/pages/registration/Registration";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Cart from "https://ahamoth.github.io/tur/pages/card/Cart";
import Manager from "https://ahamoth.github.io/tur/pages/manager/Manager";
import TourCreation from "https://ahamoth.github.io/tur/pages/manager/TourCreation";
import {Auth0Provider} from "@auth0/auth0-react";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserMain/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Registration/>
    },
    {
        path: '/main',
        element: <UserMain/>
    },
    {
        path: '/cart',
        element: <Cart/>
    },
    {
        path: '/manager',
        element: <Manager/>
    },
    {
        path: '/manager/new-tour',
        element: <TourCreation/>
    }
]);


root.render(
    <React.StrictMode>
        <Auth0Provider
            domain='dev-tasbailnxcz6c0vf.us.auth0.com'
            clientId='aBLXPBHFNJkx9LXHtYv8bLV3t8lPcb1b'
            authorizationParams={{
                redirect_uri: window.location.origin
            }}
        >
            <RouterProvider router={router}/>
        </Auth0Provider>
    </React.StrictMode>
);
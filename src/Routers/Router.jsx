import { createBrowserRouter } from "react-router-dom";
import Root from "../layOut/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Home/Services/Services";
import EventDetails from "../Pages/EventDetails/EventDetails";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Profile from "../Pages/Profile/Profile";
import About from "../Pages/About/About";
import Events from "../Pages/Events/Events";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/event.json')
            },
            {
                path: '/services',
                element: <PrivateRoutes><Services></Services></PrivateRoutes>,
                loader: () => fetch('/event.json')

            },
            {
                path: '/services/:id',
                element: <PrivateRoutes><EventDetails></EventDetails></PrivateRoutes>,
                loader: () => fetch('/event.json')


            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:"/profile",
                element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/event",
                element:<Events></Events>
            },
           

        ]
    }
]);


export default router;
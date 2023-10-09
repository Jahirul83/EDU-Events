import { createBrowserRouter } from "react-router-dom";
import Root from "../layOut/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Home/Services/Services";
import EventDetails from "../Pages/EventDetails/EventDetails";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () =>fetch('/event.json')
            },
            {
                path:'/services/:id',
                element:<EventDetails></EventDetails>,
                loader: () =>fetch('/event.json')

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/services',
                element:<Services></Services>,
            }
        ]
    }
]);


export default router;
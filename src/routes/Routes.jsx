import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Card from "../pages/Cards/Card";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About/About";
import ContactUs from "../pages/Contact/ContactUs";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/events.json')
            },
            {
                path: '/about',
                element: <PrivateRoute><About></About></PrivateRoute>
            },
            {
                path: '/contact',
                element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>
            },
            {
                path: '/cards/:id',
                element: <PrivateRoute><Card></Card></PrivateRoute>,
                loader: () => fetch('/events.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;
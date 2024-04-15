import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from './../pages/Login';
import Register from './../pages/Register';
import PropertyDetails from './../pages/PropertyDetails';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=>fetch("property.json"),
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Register></Register>,
            },
            {
                path:'/details',
                element:<PropertyDetails></PropertyDetails>,
            },
        ]
    }
]);

export default router;
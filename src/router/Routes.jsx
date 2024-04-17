import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from './../pages/Login';
import Register from './../pages/Register';
import PropertyDetails from './../pages/PropertyDetails';
import UserProfile from './../pages/UserProfile';
import UpdateProfile from './../pages/UpdateProfile';
import FavoriteProp from './../pages/FavoriteProp';
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: ()=>fetch("/property.json"),
        children: [
            {
                path:'/',
                element:<Home></Home>,
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
                path:'/property/:propertyid',
                element:<PrivateRouter><PropertyDetails></PropertyDetails></PrivateRouter>,
                loader: ()=>fetch("/property.json"),
            },
            {
                path:'/user-profile',
                element:<PrivateRouter><UserProfile></UserProfile></PrivateRouter>,
            },
            {
                path:'/update-profile',
                element:<PrivateRouter><UpdateProfile></UpdateProfile></PrivateRouter>,
            },
            {
                path:'/favorite',
                element:<PrivateRouter><FavoriteProp></FavoriteProp></PrivateRouter>,
            },
        ]
    }
]);

export default router;
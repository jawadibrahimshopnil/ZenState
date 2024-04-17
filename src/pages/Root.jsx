import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createContext, useState } from "react";
import AuthProvider from "../router/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export const PropertyContext = createContext(null);
export const FavPropertyContext = createContext(null);
const Root = () => {
    const [favProps, setFavProps] = useState([])
    const properties = useLoaderData();
    return (
        <>
        <AuthProvider>
            <div className='max-w-screen-xl mx-auto'>
                <Navbar></Navbar>
                <PropertyContext.Provider value={properties}>
                    <FavPropertyContext.Provider value={{favProps, setFavProps}}>
                        <Outlet></Outlet>
                    </FavPropertyContext.Provider>
                </PropertyContext.Provider>
            
            <Footer></Footer>
            </div>
            <ToastContainer />
        </AuthProvider>
        </>
    );
};

export default Root;
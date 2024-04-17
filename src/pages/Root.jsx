import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { createContext, useState } from "react";

export const PropertyContext = createContext(null);
export const FavPropertyContext = createContext(null);
const Root = () => {
    const [favProps, setFavProps] = useState([])
    const properties = useLoaderData();
    return (
        <>


            <div className='max-w-screen-xl mx-auto'>
                <Navbar></Navbar>
                <PropertyContext.Provider value={properties}>
                    <FavPropertyContext.Provider value={{favProps, setFavProps}}>
                        <Outlet></Outlet>
                    </FavPropertyContext.Provider>
                </PropertyContext.Provider>
            </div>
            <Footer></Footer>

        </>
    );
};

export default Root;
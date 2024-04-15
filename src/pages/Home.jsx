import { useLoaderData } from "react-router-dom";
import Slider from "../components/Slider";
import EstateSection from "../components/EstateSection";
import { createContext } from "react";

export const PropertyContext = createContext(null);

const Home = () => {
    const properties = useLoaderData();
    return (
        <div>
            {/* <Slider></Slider> */}
            <PropertyContext.Provider value={properties}>
                <EstateSection></EstateSection>
            </PropertyContext.Provider>
        </div>
    );
};

export default Home;
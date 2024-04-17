import { useContext } from "react";
import PropertyCard from "./PropertyCard";
import { PropertyContext } from "../pages/Root";

const EstateSection = () => {
    const properties = useContext(PropertyContext);
    return (
        <div className="my-8 md:my-12">
            <div>
                <h1 className="text-center text-4xl font-bold mb-1 md:mb-6">Estate</h1>
                <p className="px-8 md:px-28 text-center mb-6 md:mb-12">Explore our curated collection of exquisite properties, meticulously selected to embody elegance, luxury, and unparalleled comfort. Begin your journey towards finding your dream home with ZenState today.</p>
            </div>
            <div id="estate" className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-6">
                {
                    properties.map((property,idx)=><PropertyCard key={idx} data={property}></PropertyCard>)
                }
            </div>
        </div>
    );
};

export default EstateSection;
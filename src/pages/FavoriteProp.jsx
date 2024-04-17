import { useContext } from "react";
import { FavPropertyContext, PropertyContext } from "./Root";
import PropertyCard from "../components/PropertyCard";
import { Helmet } from 'react-helmet-async';

const FavoriteProp = () => {
    const {favProps} = useContext(FavPropertyContext);
    const properties = useContext(PropertyContext);

    const selectedProperty = properties.filter(property=>favProps.includes(property.id));
    console.log(selectedProperty, favProps);

    return (
        <div className="my-8 md:my-12">
            <Helmet>
                <title>ZenState | Favorites</title>
            </Helmet>
            <div>
                <h1 className="text-center text-4xl font-bold mb-1 md:mb-6">Your Favorite</h1>
                <p className="px-8 md:px-28 text-center mb-6 md:mb-12">Explore our curated collection of exquisite properties, meticulously selected to embody elegance, luxury, and unparalleled comfort. Begin your journey towards finding your dream home with ZenState today.</p>
            </div>
            <div id="estate" className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-6">
                {
                    selectedProperty.map((property,idx)=><PropertyCard key={idx} data={property}></PropertyCard>)
                }
            </div>
        </div>
    );
};

export default FavoriteProp;
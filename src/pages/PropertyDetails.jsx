import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FavPropertyContext } from "./Root";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import { MapContainer } from 'react-leaflet/MapContainer'
// import { TileLayer } from 'react-leaflet/TileLayer'
// import { useMap } from 'react-leaflet/hooks'
// import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const PropertyDetails = () => {
    const { favProps, setFavProps } = useContext(FavPropertyContext);

    const selectedPropertyID = useParams().propertyid;
    const properties = useLoaderData();

    console.log(properties)
    const selectedProperty = properties.find(property => property.id == selectedPropertyID)
    const { id, estate_title, description, segment_name, price, area, status, location, facilities, image} = selectedProperty;

    // const position = [geoLocation.latitude, geoLocation.longitude];
    return (
        <div>
            <div className="lg:flex flex-row-reverse gap-6 justify-between lg:px-0 lg:py-0 px-10 py-7 mb-6 rounded-3xl mt-4">
                <div className="bg-[#1313130D]/[0.05] rounded-2xl lg:w-[48%] max-w-[80%] mx-auto">
                    <img src={image} className="lg:max-w-full h-full object-cover rounded-lg" />
                </div>

                <div className="flex flex-col lg:mt-0 mt-6 lg:w-[48%]">
                    <div className="grow">
                        <div className="pb-5 mb-5 border-b-2 border-gray-300">
                            <h2 className="mb-4 text-4xl font-bold font-playFair">{estate_title}</h2>
                            <p className="text-lg">{description}</p>
                        </div>
                        <div className="pb-5 mb-5 border-b-2 border-gray-300">
                            <h1 className="text-center font-bold text-xl">Main Details</h1>
                            <p className="flex justify-between text-xl">Price: <span className="text-xl text-green-600 font-medium">{price}</span></p>
                            <p className="flex justify-between text-xl">Segment: <span className="text-xl font-medium">{segment_name}</span></p>
                            <p className="flex justify-between text-xl">Status: <span className="text-xl font-medium">{status}</span></p>
                            <p className="flex justify-between text-xl">Area: <span className="text-xl font-medium">{area}</span></p>
                            <p className="flex justify-between text-xl">Location: <span className="text-xl font-medium">{location}</span></p>
                        </div>
                        <div className="pb-5 mb-5 border-b-2 border-gray-300">
                            <h1 className="text-center font-bold text-xl">Property Layout</h1>
                            <p className="flex justify-between text-xl">Bedrooms: <span className="text-xl font-medium">{facilities[0].slice(0, 1)}</span></p>
                            <p className="flex justify-between text-xl">Bathrooms: <span className="text-xl font-medium">{facilities[1].slice(0, 1)}</span></p>
                            <p className="flex justify-between text-xl">Backyard: <span className="text-xl font-medium">Large</span></p>
                            <p className="flex justify-between text-xl">Garage: <span className="text-xl font-medium">Yes</span></p>
                        </div>
                    </div>
                    <div>
                        <a className="bg-green-500 text-white px-7 inline-block py-4 border-2 rounded-lg font-semibold mr-4">Buy</a>
                        <button onClick={() => {
                            setFavProps([...favProps, id]);
                            toast.success("Added to Favorite");
                            console.log(favProps)
                        }} className="bg-blue-500 text-white px-7 inline-block py-4 border-2 rounded-lg font-semibold mr-4">Add to Favorite</button>
                    </div>
                </div>


            </div>
            {/* <div className="w-full h-96 border border-red-400">
                <MapContainer center={[48.8566,
                    2.3522]} zoom={13}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                    </Marker>
                </MapContainer>
            </div> */}
        </div>

    );
};

export default PropertyDetails;
const PropertyDetails = () => {
    return (
        <div className="lg:flex flex-row-reverse justify-between lg:px-0 lg:py-0 px-10 py-7 mb-24 rounded-3xl mt-4">
            <div className="bg-[#1313130D]/[0.05] rounded-2xl lg:w-[48%] max-w-[80%] mx-auto">
                <img src="https://ap.rdcpix.com/8f095a6c773ffa2a8cdd4e720de75de1l-m2556217099od-w1080_h768.webp" className="lg:max-w-full h-full object-cover rounded-lg" />
            </div>
            
            <div className="flex flex-col lg:mt-0 mt-6 lg:w-[48%]">
                <div className="grow">
                <div className="pb-5 mb-5 border-b-2 border-gray-300">
                    <h2 className="mb-4 text-4xl font-bold font-playFair">Luxury Beach House</h2>
                    <p className="text-lg">Experience the best in senior living with this vibrant community. Designed for active seniors, it offers a range of amenities and activities to support a healthy and fulfilling lifestyle. With spacious apartments, beautiful gardens, and on-site dining options, its the perfect place to enjoy retirement.</p>
                </div>
                <div className="pb-5 mb-5 border-b-2 border-gray-300">
                <h1 className="text-center font-bold text-xl">Main Details</h1>
                    <p className="flex justify-between text-xl">Status: <span className="text-xl font-medium">Sale</span></p>
                    <p className="flex justify-between text-xl">Segment: <span className="text-xl font-medium">Apartment</span></p>
                    <p className="flex justify-between text-xl">Price: <span className="text-xl text-green-600 font-medium">$500K</span></p>
                    <p className="flex justify-between text-xl">Area: <span className="text-xl font-medium">2000 sqft</span></p>
                    <p className="flex justify-between text-xl">Location: <span className="text-xl font-medium">Manhattan, New York</span></p>
                </div>
                <div className="pb-5 mb-5 border-b-2 border-gray-300">
                    <h1 className="text-center font-bold text-xl">Property Layout</h1>
                    <p className="flex justify-between text-xl">Bedrooms: <span className="text-xl font-medium">3</span></p>
                    <p className="flex justify-between text-xl">Bathrooms: <span className="text-xl font-medium">2</span></p>
                    <p className="flex justify-between text-xl">Backyard: <span className="text-xl font-medium">Large</span></p>
                    <p className="flex justify-between text-xl">Garage: <span className="text-xl font-medium">Yes</span></p>
                </div>
                </div>
                <div>
                    <a className="bg-green-500 text-white px-7 inline-block py-4 border-2 rounded-lg font-semibold mr-4">Buy</a>
                    <a className="bg-blue-500 text-white px-7 inline-block py-4 border-2 rounded-lg font-semibold mr-4">Bookmark</a>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;
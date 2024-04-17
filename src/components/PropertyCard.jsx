import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";
AOS.init();
const PropertyCard = ({ data }) => {
    const { id, estate_title, segment_name, price, area, status, location, facilities, image } = data;
    return (
        <div data-aos="fade-up" className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure>
                <img
                    src={image}
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <div>
                    <div className="badge badge-outline mr-1">{segment_name}</div>
                    <div className="badge badge-outline">{status}</div>
                </div>

                <h2 className="card-title text-green-600">{price}</h2>

                <div>
                    <h2 className="card-title -mt-2">{estate_title}</h2>
                    <p>
                        <span className="font-bold">Area:</span> {area}
                    </p>
                    <p>
                        <span className="font-bold">Location:</span> {location}
                    </p>
                </div>
                <div>
                    <h3 className="font-bold text-lg">Facilities:</h3>
                    <ul className="list-disc">
                        {
                            facilities.map((item,idx)=><li key={idx} className="ml-4">{item}</li>)
                        }
                        

                        <li className="ml-4">2 Bathroom</li>
                    </ul>
                </div>
                <div className="card-action">
                    <Link to={`/property/${id}`} className="btn w-full bg-green-600 text-white">
                        View Property
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default PropertyCard;

PropertyCard.propTypes = {
    data: PropTypes.object,
};
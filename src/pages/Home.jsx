// import Slider from "../components/Slider";
import EstateSection from "../components/EstateSection";

import { Helmet } from 'react-helmet-async';



const Home = () => {
    
    return (
        <div>
            <Helmet>
                <title>ZenState | Home</title>
            </Helmet>
            {/* <Slider></Slider> */}
                <EstateSection></EstateSection>
        </div>
    );
};

export default Home;
import { Link, useLoaderData } from "react-router-dom";
import TouristsSpotsCard from "./TouristsSpotsCard";



const TouristsSpots = () => {

    const loadedTouristsSpotsData = useLoaderData();

    return (
        <div className="barlow-condensed-regular mt-12 mb-10 md:mt-24 container max-w-6xl mx-auto space-y-6 sm:space-y-12">
            <div className="text-center mb-12">
                <h2 data-aos="fade-down" data-aos-duration="1000" className="font-semibold text-3xl lg:text-[44px] lg:mb-4 mb-2 ">Tourists Spots</h2>
                <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" className="lg:w-[550px] md:w-[500px] text-sm lg:text-lg text-[#9ca3a9] font-medium w-80 mx-auto">Uncover must-see destinations with Turio. From iconic landmarks to hidden treasures, plan your perfect itinerary and make memories.</p>
            </div>

            <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">

                {
                    loadedTouristsSpotsData.slice(0, 6).map(touristsSpot => <TouristsSpotsCard key={touristsSpot._id} touristsSpot={touristsSpot} ></TouristsSpotsCard>)
                }
            </div>
            <div className="text-center">
                <Link to={`/allTourists`} className='border border-green-600 py-[9px] bg-green-600 hover:bg-transparent px-10 text-white hover:text-green-600 font-semibold rounded-full text-lg'> View All </Link>
            </div>
        </div>
    );
};

export default TouristsSpots;
import { Link, useLoaderData } from "react-router-dom";
import TouristsSpotsCard from "../Components/TouristsSpotsCard";
import Navbar from "../Components/Navbar";



const AllTourists = () => {

    const loadedTouristsSpotsData = useLoaderData();

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="mt-12 mb-10 md:mt-18 container max-w-6xl mx-auto space-y-6 sm:space-y-12">
                <div className="text-center mb-12">
                    <h2 data-aos="fade-down" data-aos-duration="1000" className="font-semibold text-3xl lg:text-[40px] lg:mb-4 mb-2"> All Tourists Spots</h2>
                    <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" className="lg:w-[550px] lg:text-[16px] md:w-[500px] text-sm  w-80 mx-auto">Discover Our Newest Listings: The Latest Properties Ready to Impress and Inspire Your Next Adventure in Real Estate Excellence!</p>
                </div>

                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">

                    {
                        loadedTouristsSpotsData.map(touristsSpot => <TouristsSpotsCard key={touristsSpot._id} touristsSpot={touristsSpot} ></TouristsSpotsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllTourists;
import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import AllTouristsSpotsCard from "../Components/AllTouristsSpotsCard";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";



const AllTourists = () => {
    const loadedTouristsSpotsData = useLoaderData();
    console.log(loadedTouristsSpotsData);
    const [displayData, setDisplayData] = useState(loadedTouristsSpotsData);

    

    const sortInAscending = () => {
        const display = [...loadedTouristsSpotsData].sort((a, b) => parseInt(a.averageCost) - parseInt(b.averageCost));
        setDisplayData(display);
    }
    const sortInDescending = () => {
        const display = [...loadedTouristsSpotsData].sort((a, b) => parseInt(b.averageCost) - parseInt(a.averageCost));
        setDisplayData(display);
    }
    const normalView = () => {
        setDisplayData(loadedTouristsSpotsData);
    }

    console.log(displayData);

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="mt-4 mb-10 md:mt-18 container max-w-6xl mx-auto">
                <div className="text-center">
                    <h2 data-aos="fade-down" data-aos-duration="1000" className="font-semibold text-3xl lg:text-[40px] lg:mb-4 mb-2"> All Tourists Spots</h2>
                    <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" className="lg:w-[550px] lg:text-[16px] md:w-[500px] text-sm  w-80 mx-auto">Discover Our Newest Listings: The Latest Properties Ready to Impress and Inspire Your Next Adventure in Real Estate Excellence!</p>
                </div>

                 {/* Sort By*/}
            <div className="text-end mt-4 mb-4 pr-10">
                <details className="dropdown">
                    <summary className="m-1 btn bg-green-600 hover:bg-green-600 rounded-lg text-white flex items-center justify-center">Sort By
                        <span className="text-3xl"><RiArrowDropDownLine /></span>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={normalView}><a>All</a></li>
                        <li onClick={sortInAscending}><a>Ascending in A. Cost</a></li>
                        <li onClick={sortInDescending}><a>Descending in A. Cost</a></li>
                    </ul>
                </details>
            </div>

                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">

                    {
                        displayData?.map(touristsSpot => <AllTouristsSpotsCard key={touristsSpot._id} touristsSpot={touristsSpot} ></AllTouristsSpotsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllTourists;
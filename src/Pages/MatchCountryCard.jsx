import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import errorImage from "../../public/404.jpg"
import { IoLocationOutline } from 'react-icons/io5';

const MatchCountryCard = ({ touristsSpot }) => {
    const { _id, touristsSpotName, countryName, averageCost, location, photo, seasonality, description } = touristsSpot;
    return (
        <div>
            <div className=" max-w-sm mx-auto group rounded border-2 lg::w-[365px]">

                <div className="overflow-hidden relative">
                    <img role="presentation" className="object-cover transition-all hover:scale-110 duration-700 ease-in-out w-full rounded h-52 bg-gray-500" src={photo || errorImage} />
                    {/* <h3 className="z-10 bg-green-600 text-sm font-medium text-white absolute top-4 left-4 rounded-md py-2 px-[14px] xs:text-xl md:text-sm flex items-center gap-2"> <FaRegClock /> {seasonality}</h3> */}
                </div>

                <div className="p-6 space-y-2">
                    <h3 className="text-2xl font-semibold ">{touristsSpotName}</h3>
                    <div className="flex justify-between">
                        <span className="text-gray-700 flex items-center gap-2"><IoLocationOutline className='text-black' /> {countryName}, {location.slice(0, 16)}</span>
                        <h3 className="z-10 bg-green-600 text-sm font-medium text-white rounded-md py-1 px-[10px] xs:text-xl md:text-sm flex items-center gap-2">{seasonality}</h3>
                    </div>
                    <div className="text-gray-500 text-[15px]">
                        <p className='flex items-center gap-2'>{description.slice(0, 135)}</p>
                    </div>
                    <div className=" flex justify-between items-center">
                        <h2 className="text-2xl font-semibold text-green-600">
                            ${averageCost}
                        </h2>
                    </div>

                    <Link to={`/details/${_id}`} className=" w-full relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden transition-all ease-out duration-300 rounded-md">
                        <span className="md:px-6 border bg-green-600 text-white duration-300 border-green-600 w-full text-center md:py-3 px-3 py-2 transition-all ease-out rounded-md md:text-[16px] text-sm">View Details</span> 
                    </Link>

                </div>
            </div>
        </div>
    );
};

MatchCountryCard.propTypes = {
    touristsSpot: PropTypes.object.isRequired,
};

export default MatchCountryCard;
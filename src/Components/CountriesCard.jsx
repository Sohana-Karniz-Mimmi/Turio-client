import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import errorImage from "../../public/404.jpg"
import { FaRegCalendarDays, FaRegClock } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';

const CountriesCard = ({ countries }) => {
    const { _id, touristsSpotName, countryName, averageCost, description, location, travelTime, photo } = countries;
    return (
        <div>
            <div className=" max-w-sm mx-auto group rounded border-2 lg::w-[365px]">

                <div className="overflow-hidden relative">
                    <img role="presentation" className="object-cover transition-all hover:scale-110 duration-700 ease-in-out w-full rounded h-52 bg-gray-500" src={photo || errorImage} />
                </div>

                <div className="p-6 space-y-2">
                    <h3 className="text-2xl text-center font-semibold ">{touristsSpotName}</h3>
                    <div className=" text-center flex justify-between items-center">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

CountriesCard.propTypes = {
    countries: PropTypes.object.isRequired,
};

export default CountriesCard;
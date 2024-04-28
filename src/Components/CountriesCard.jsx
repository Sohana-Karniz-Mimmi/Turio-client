import PropTypes from 'prop-types';

import errorImage from "../../public/404.jpg"
import { Link } from 'react-router-dom';

const CountriesCard = ({ countries }) => {
    const { countryName, description, photo } = countries;
    return (
        <Link to={`/countries/${countryName}`}>
            <div className=" max-w-sm mx-auto group rounded border-2 lg::w-[365px]">

                <div className="overflow-hidden relative">
                    <img role="presentation" className="object-cover transition-all hover:scale-110 duration-700 ease-in-out w-full rounded h-52 bg-gray-500" src={photo || errorImage} />
                </div>

                <div className="p-6 space-y-2">
                    <h3 className="text-2xl group-hover:text-green-600 hover:font-bold transition-all duration-300 text-center font-semibold ">{countryName}</h3>
                    <div className=" text-center flex justify-between items-center">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

CountriesCard.propTypes = {
    countries: PropTypes.object.isRequired,
};

export default CountriesCard;
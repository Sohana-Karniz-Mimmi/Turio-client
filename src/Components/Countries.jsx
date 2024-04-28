import { Link, useLoaderData } from "react-router-dom";
import CountriesCard from "./CountriesCard";
import { useEffect, useState } from "react";



const Countries = () => {

    const loadedCountriesData = useLoaderData();
    const [countriesData, setCountriesData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/countries`)
        .then(res => res.json())
        .then(data => {
            setCountriesData(data);
        })
    }, [])
    console.log(countriesData);

    return (
        <>
            <div className="mt-12 mb-10 md:mt-24 container max-w-6xl mx-auto space-y-6 sm:space-y-12">
                <div className="text-center mb-12">
                    <h2 data-aos="fade-down" data-aos-duration="1000" className="font-semibold text-3xl lg:text-[40px] lg:mb-4 mb-2">Countries</h2>
                    <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" className="lg:w-[550px] lg:text-[16px] md:w-[500px] text-sm  w-80 mx-auto">Dive into global exploration with Turio. Learn about diverse cultures, stunning landscapes, and unique experiences in countries worldwide.</p>
                </div>

                <Link to={`/countries`} className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">

                    {
                        countriesData.map(countries => <CountriesCard key={countries._id} countries={countries} ></CountriesCard>)
                    }
                </Link>
            </div>
        </>
    );
};

export default Countries;
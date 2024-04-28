import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useEffect, useState } from "react";
import MatchCountryCard from "./MatchCountryCard";



const CountriesData = () => {

    // const loadedTouristsSpotsData = useLoaderData();
    // console.log(loadedTouristsSpotsData);
    const {countryName} = useParams();
    console.log(countryName);

    const [country, setCountry] = useState()

    useEffect(() => {
        fetch(`https://tourism-server-beta.vercel.app/tourists`)
        .then(res => res.json())
        .then(data => {
           setCountry(data)
        })
    }, [])
    const remaining = country?.filter(country => country.countryName == countryName)
    console.log(remaining);

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="mt-12 mb-10 md:mt-18 container max-w-6xl mx-auto space-y-6 sm:space-y-12">
                <div className="text-center mb-12">
                    <h2 data-aos="fade-down" data-aos-duration="1000" className="font-semibold text-3xl lg:text-[40px] lg:mb-4 mb-2"> Tourist Spot In {countryName}</h2>
                    
                </div>

                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">

                    {
                        remaining?.map(touristsSpot => <MatchCountryCard key={touristsSpot._id} touristsSpot={touristsSpot} ></MatchCountryCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CountriesData;
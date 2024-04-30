import Navbar from "../Components/Navbar";
import { FaHeart, FaLocationDot, FaRegClock, FaRegMap } from "react-icons/fa6";
import {  useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaRegUserCircle } from "react-icons/fa";


const ViewDetails = () => {

    const loadedDetailsData = useLoaderData()
    // console.log(loadedUpdateData);

    const { touristsSpotName, countryName, averageCost, description, location, travelTime, totalVisitors, seasonality, photo } = loadedDetailsData




    return (
        <div className="">
            <Helmet>
                <title>{touristsSpotName} - Turio</title>
            </Helmet>
            <div>
                <Navbar></Navbar>
            </div>

            <div className="barlow-condensed-regular lg:flex gap-6 justify-between container mx-auto md:px-10 px-1 mb-10">
                <div className="relative">
                    <div className=" border-b pb-6 flex justify-between items-end mb-4">
                        <div className="space-y-2">

                            <h2 data-aos="fade-down" data-aos-duration="1000" data-aos-delay="1800" className="md:text-5xl text-2xl font-medium">{touristsSpotName}</h2>
                            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2000" className="md:text-[17px] text-xs flex items-center font-medium text-[#9ca3a9] gap-2">
                                <FaLocationDot /> {location}
                            </p>
                        </div>

                        <div>
                            <h2 className="md:text-[30px] text-[#FF0143] font-semibold text-2xl "> ${averageCost}</h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex gap-6 font-medium text-[#9ca3a9] mb-6">
                            <p className="flex gap-2 items-center"><FaRegClock /> {travelTime} </p>
                            <p className="flex gap-2 items-center"><FaRegUserCircle /> {totalVisitors} </p>
                            <p className="flex gap-2 items-center"><FaRegMap /> {countryName} </p>
                        </div>
                        <button className=" md:py-[4px] py-[3px] md:px-3 px-2 rounded-2xl text-sm bg-green-600 text-white">{seasonality}</button>
                    </div>

                    <div className="relative">
                        <img className="w-full" src={photo} alt="" />
                        <h3 className="z-10 group-hover:bg-white bg-[#00000050] text-sm font-medium text-white absolute top-4 right-5 rounded-full py-2 px-2 xs:text-xl md:text-sm flex items-center gap-2"> <FaHeart className="group-hover:text-[#FF0143]" /></h3>
                    </div>

                    {/* Details */}

                    <div className="p-6 rounded-lg border my-8" >
                        <h2 className="text-black md:text-3xl text-xl font-medium">Description</h2>
                        <div className=" pb-4 pt-3 flex justify-between items-center font-medium text-[#9ca3a9]">
                            <p className="text-[#5c727d]">{description}</p>
                        </div>

                    </div>

                </div>


                {/* Form */}
                <div className=" h-[550px] md:max-w-md w-full bg-white sm:px-6 mt-12 pb-6 px-4 border rounded-lg">
                    <form>
                        <div className="py-6 mt-10 text-center">
                            <h3 className="text-3xl text-black font-extrabold">Book This Tour</h3>
                        </div>

                        <div >
                            <div className="relative flex items-center">
                                <input name="name" type="text" required className="w-full text-black text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-3 outline-none bg-transparent" placeholder="Your Name" />
                            </div>
                        </div>


                        <div className="mt-4">
                            <div className="relative flex items-center">
                                <input name="email" type="text" required className="w-full text-black text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-3 outline-none bg-transparent" placeholder="Enter email" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                                    <defs>
                                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                            <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                        <path fill="none" stroke-miterlimit="10" stroke-width="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                                        <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                                    </g>
                                </svg>
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="relative flex items-center">
                                <input name="phone" type="text" required className="w-full text-black text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-3 outline-none bg-transparent" placeholder="Your Phone" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <div className="relative flex items-center">
                                <textarea name="comment" type="text" required className="w-full text-black text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-3 outline-none bg-transparent" placeholder="I'm interested in..." />
                            </div>
                        </div>

                        <div className="mt-6">
                            <button className=" w-full relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                <span className="relative md:px-6 md:py-3 px-3 py-2 transition-all ease-out rounded-md group-hover:bg-opacity-0 duration-400">
                                    <span className="relative text-white md:text-[16px] text-sm">Book Now</span>
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ViewDetails;
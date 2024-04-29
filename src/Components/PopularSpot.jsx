import photo from "../assets/images/Saint_Martin_Island.jpg"
import errorImage from "../../public/404.jpg"
import { FaHeart, FaRegUserCircle } from "react-icons/fa";
import { FaRegClock, FaRegMap, FaStar } from "react-icons/fa6";


const PopularSpot = () => {
    return (
        <div>
            <div className="barlow-condensed-regular mt-12 mb-10 md:mt-20 container max-w-6xl mx-auto space-y-6 sm:space-y-12">
                <div className="text-center mb-12">
                    <h2 data-aos="fade-down" data-aos-duration="1000" className="font-semibold  text-3xl lg:text-[44px] lg:mb-4 mb-2">Most Popular Tourists Spots</h2>
                    <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" className="lg:w-[550px] lg:text-lg md:w-[500px] text-sm w-80 mx-auto text-[#9ca3a9] font-medium">Explore Turio's top picks. From iconic landmarks to hidden gems, uncover the most sought-after destinations for your next adventure</p>
                </div>

                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">


                    <div className=" max-w-sm mx-auto group rounded border-2 lg::w-[365px]">

                        <div className="overflow-hidden relative">
                            <img role="presentation" className="object-cover transition-all group-hover:scale-110 duration-700 ease-in-out w-full rounded h-56 bg-gray-500" src={photo || errorImage} />
                            <h3 className="z-10 group-hover:bg-white bg-[#00000050] text-sm font-medium text-white absolute top-4 right-5 rounded-full py-2 px-2 xs:text-xl md:text-sm flex items-center gap-2"> <FaHeart className="group-hover:text-[#FF0143]" /></h3>
                        </div>

                        <div className="p-6 space-y-2">
                            <div className="flex justify-between">
                                <span className=" flex items-center gap-2 text-[#9ca3a9] font-medium"><FaStar className="text-[#ffa801] " /> 8.0 Superb</span>
                            </div>
                            <h3 className="text-2xl  font-semibold ">Saint
                                Martin’s Island</h3>

                            <div className=" flex justify-between items-center border-b pb-6">
                                <h2 className=" text-[#9ca3a9] font-medium">
                                    <span className="text-[#FF0143] font-semibold text-2xl ">$2600</span> / Per Person
                                </h2>
                            </div>

                            <div className="flex gap-6 font-medium text-[#9ca3a9] pt-3">
                                <p className="flex gap-2 items-center"><FaRegClock /> 3 Days </p>
                                <p className="flex gap-2 items-center"><FaRegUserCircle /> 12+ </p>
                                <p className="flex gap-2 items-center"><FaRegMap /> Cox's Bazar</p>
                            </div>

                        </div>
                    </div>

                    <div className=" max-w-sm mx-auto group rounded border-2 lg::w-[365px]">

                        <div className="overflow-hidden relative">
                            <img role="presentation" className="object-cover transition-all group-hover:scale-110 duration-700 ease-in-out w-full rounded h-56 bg-gray-500" src="https://res.cloudinary.com/dd273wlky/image/upload/v1664871457/TravelRaval/Phuket.webp"/>
                            <h3 className="z-10 group-hover:bg-white bg-[#00000050] text-sm font-medium text-white absolute top-4 right-5 rounded-full py-2 px-2 xs:text-xl md:text-sm flex items-center gap-2"> <FaHeart className="group-hover:text-[#FF0143]" /></h3>
                        </div>

                        <div className="p-6 space-y-2">
                            <div className="flex justify-between">
                                <span className=" flex items-center gap-2 text-[#9ca3a9] font-medium"><FaStar className="text-[#ffa801] " /> 8.0 Superb</span>
                            </div>
                            <h3 className="text-2xl  font-semibold ">Phulket Thailand</h3>

                            <div className=" flex justify-between items-center border-b pb-6">
                                <h2 className=" text-[#9ca3a9] font-medium">
                                    <span className="text-[#FF0143] font-semibold text-2xl ">$1399</span> / Per Person
                                </h2>
                            </div>

                            <div className="flex gap-6 font-medium text-[#9ca3a9] pt-3">
                                <p className="flex gap-2 items-center"><FaRegClock /> 3 Days </p>
                                <p className="flex gap-2 items-center"><FaRegUserCircle /> 12+ </p>
                                <p className="flex gap-2 items-center"><FaRegMap /> Thailand </p>
                            </div>

                        </div>
                    </div>

                    <div className=" max-w-sm mx-auto group rounded border-2 lg::w-[365px]">

                        <div className="overflow-hidden relative">
                            <img role="presentation" className="object-cover transition-all group-hover:scale-110 duration-700 ease-in-out w-full rounded h-56 bg-gray-500" src='https://sencraft.com/wp-content/uploads/2021/04/shutterstock_518620300.jpg' />
                            <h3 className="z-10 group-hover:bg-white bg-[#00000050] text-sm font-medium text-white absolute top-4 right-5 rounded-full py-2 px-2 xs:text-xl md:text-sm flex items-center gap-2"> <FaHeart className="group-hover:text-[#FF0143]" /></h3>
                        </div>

                        <div className="p-6 space-y-2">
                            <div className="flex justify-between">
                                <span className=" flex items-center gap-2 text-[#9ca3a9] font-medium"><FaStar className="text-[#ffa801] " /> 7.0 Superb</span>
                            </div>
                            <h3 className="text-2xl  font-semibold ">Sapa 2 Days Tour</h3>

                            <div className=" flex justify-between items-center border-b pb-6">
                                <h2 className=" text-[#9ca3a9] font-medium">
                                    <span className="text-[#FF0143] font-semibold text-2xl ">$1870</span> / Per Person
                                </h2>
                            </div>

                            <div className="flex gap-6 font-medium text-[#9ca3a9] pt-3">
                                <p className="flex gap-2 items-center"><FaRegClock /> 2 Days </p>
                                <p className="flex gap-2 items-center"><FaRegUserCircle /> 12+ </p>
                                <p className="flex gap-2 items-center"><FaRegMap /> Vietnam </p>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default PopularSpot;
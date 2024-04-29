import { useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import image from "../assets/images/Banner Slider/banner1.png"


const ViewDetails = () => {

    const loadedDetailsData = useLoaderData()
    // console.log(loadedUpdateData);

    const { _id, touristsSpotName, countryName, averageCost, description, location, travelTime, totalVisitors, seasonality, photo } = loadedDetailsData




    return (
        <div className="">
            <div>
                <Navbar></Navbar>
            </div>
            <section className="">
                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                    <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                        <img src={photo} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                        <div className="p-6 space-y-2 lg:col-span-5">
                            <h3 className="text-2xl font-semibold sm:text-4xl">Spot Name : {touristsSpotName}</h3>
                            <p className="border-b-2 pb-4"> <span className="font-bold">Description:</span> {description}</p>

                            <div className="dark:text-gray-800">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-xs">
                                        <colgroup>
                                            <col />
                                            <col />
                                        </colgroup>
                                        <tbody>
                                            <tr className=" dark:bg-gray-50">
                                                <td className="">
                                                    <span className="font-bold">Country</span>
                                                </td>
                                                <td className="p-3">
                                                    <p>{countryName}</p>
                                                </td>
                                            </tr>
                                            <tr className=" dark:bg-gray-50">
                                                <td className="">
                                                    <span className="font-bold">Location</span>
                                                </td>
                                                <td className="p-3">
                                                    <p>{location}</p>
                                                </td>
                                            </tr>
                                            <tr className=" dark:bg-gray-50">
                                                <td className="">
                                                    <span className="font-bold">Seasons</span>
                                                </td>
                                                <td className="p-3">
                                                    <p>{seasonality}</p>
                                                </td>
                                            </tr>
                                            <tr className=" dark:bg-gray-50">
                                                <td className="">
                                                    <span className="font-bold">Travel Time</span>
                                                </td>
                                                <td className="p-3">
                                                    <p>8 Days</p>
                                                </td>
                                            </tr>
                                            <tr className=" dark:bg-gray-50">
                                                <td className="">
                                                    <span className="font-bold">Average Cost</span>
                                                </td>
                                                <td className="p-3">
                                                    <p>${averageCost}</p>
                                                </td>
                                            </tr>
                                            <tr className=" dark:bg-gray-50">
                                                <td className="">
                                                    <span className="font-bold">Total Visitor</span>
                                                </td>
                                                <td className="p-3">
                                                    <p>{totalVisitors}</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>


                {/* <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                    <h2 className="mb-4 text-2xl font-semibold leading-tight">Details</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <colgroup>
                                <col />
                                <col />
                            </colgroup>
                            <thead className="dark:bg-gray-300">
                                <tr className="text-left">
                                    <th className="p-3">Invoice #</th>
                                    <th className="p-3">Client</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                    <td className="p-3">
                                        <p>97412378923</p>
                                    </td>
                                    <td className="p-3">
                                        <p>Microsoft Corporation</p>
                                    </td>
                                </tr>
                                <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                    <td className="p-3">
                                        <p>97412378923</p>
                                    </td>
                                    <td className="p-3">
                                        <p>Tesla Inc.</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> */}


            </section>
        </div>
    );
};

export default ViewDetails;
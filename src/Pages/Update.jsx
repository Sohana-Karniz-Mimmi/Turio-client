import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const Update = () => {

    // React Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const loadedUpdateData = useLoaderData()
    // console.log(loadedUpdateData);

    const { _id, touristsSpotName, countryName, averageCost, description, location, travelTime, totalVisitors, seasonality, photo } = loadedUpdateData

    const { user } = useContext(AuthContext);
    const email = user.email
    const displayName = user.displayName

    const handleUpdateForm = data => {
        const { touristsSpotName, countryName, averageCost, description, location, travelTime, totalVisitors, seasonality, photo } = data

        const touristSport = { touristsSpotName, countryName, averageCost, description, location, travelTime, totalVisitors, seasonality, photo, email, displayName }
        // console.log(touristSport);


        fetch(`https://tourism-server-beta.vercel.app/single-tourists/${_id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(touristSport)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Update Successfully",
                        icon: "success"
                    });
                }
                console.log('inside post response data', data);
            })


    }

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <section className="p-6 dark:text-gray-900">

                <form onSubmit={handleSubmit(handleUpdateForm)} className="container mx-auto flex justify-center space-y-12">
                <fieldset className=" py-10 md:px-16 px-5 rounded-md shadow-sm dark:bg-white border-2 mt-5">
                        <div className="mb-6 text-center">
                            <h3 className="md:text-3xl text-2xl font-extrabold">Update Tourists Spot</h3>
                        </div>
                        <div className=" md:w-[680px] w-full grid grid-cols-6 gap-4 col-span-full lg:col-span-3">


                            {/* First Row  */}
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm block mb-2">Tourists Spot Name</label>
                                <div className="relative">
                                    <input {...register("touristsSpotName", { required: true })} name="touristsSpotName" defaultValue={touristsSpotName} required type="text" className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent" placeholder="Enter as Tourists Spot Name" />
                                    {/* {errors.touristsSpotName && <span className="text-red-600">Please Enter a Tourists Spot Name</span>} */}

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm block mb-2">Country Name</label>
                                <div className="relative">
                                    <select {...register("countryName", { required: true })} name="countryName" type="text" defaultValue={countryName} required className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent">
                                        <option value="">Select Country...</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Thailand">Thailand</option>
                                        <option value="Indonesia">Indonesia</option>
                                        <option value="Malaysia">Malaysia</option>
                                        <option value="Vietnam">Vietnam</option>
                                        <option value="Cambodia">Cambodia</option>
                                    </select>
                                    {/* {errors.countryName && <span className="text-red-600">Please Enter Your Country</span>} */}

                                </div>
                            </div>

                            {/* 2nd Row  */}
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm block mb-2">Location</label>
                                <div className="relative">
                                    <input {...register("location", { required: true })} defaultValue={location} name="location" type="text" required className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent" placeholder="Enter Your Photo URL" />
                                    {/* {errors.location && <span className="text-red-600">Please Enter Your location</span>} */}

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm block mb-2">Photo URL</label>
                                <div className="relative">
                                    <input {...register("photo", { required: true })} defaultValue={photo} name="photo" required type="text" className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent" placeholder="Enter Your Photo URL" />
                                    {/* {errors.photo && <span className="text-red-600">Please Enter Your Photo URL</span>} */}

                                </div>
                            </div>

                            {/* 3rd Row  */}

                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm block mb-2">Average Cost</label>
                                <div className="relative">
                                    <input {...register("averageCost", { required: true })} defaultValue={averageCost} name="averageCost" type="text" required className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent" placeholder="Enter Average Cost" />
                                    {/* {errors.averageCost && <span className="text-red-600">Please Enter Your Photo URL</span>} */}

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm block mb-2">Seasonality</label>
                                <div className="relative">
                                    <select {...register("seasonality", { required: true })} defaultValue={seasonality} type="text" required className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent">
                                        <option value="">Select Season...</option>
                                        <option value="Summer ">Summer </option>
                                        <option value="Rainy ">Rainy </option>
                                        <option value="Autumn ">Autumn </option>
                                        <option value="Late Autumn">Late Autumn</option>
                                        <option value="Winter ">Winter </option>
                                        <option value="Spring ">Spring </option>
                                    </select>
                                    {/* {errors.seasonality && <span className="text-red-600">Please Enter Your Photo URL</span>} */}

                                </div>
                            </div>

                            {/* last Row  */}
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm block mb-2">Travel Time</label>
                                <div className="travelTime">
                                    <input {...register("travelTime", { required: true })} defaultValue={travelTime} name="travelTime" type="text" required className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent" placeholder="Enter Your Photo URL" />
                                    {/* {errors.travelTime && <span className="text-red-600">Please Enter Your Photo URL</span>} */}

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm block mb-2">Total Visitors Per Year</label>
                                <div className="relative">
                                    <input {...register("totalVisitors", { required: true })} defaultValue={totalVisitors} name="totalVisitors" type="text" required className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent" placeholder="Enter Your Photo URL" />
                                    {/* {errors.totalVisitors && <span className="text-red-600">Please Enter Your Photo URL</span>} */}

                                </div>
                            </div>


                            {/* description */}
                            <div className="col-span-full">
                                <label className="text-sm block mb-2">Description</label>
                                <div className="relative">
                                    <textarea {...register("description", { required: true })} defaultValue={description} name="description" type="text" cols="10" rows="2" placeholder="Write a short description..." className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent"></textarea>

                                </div>
                            </div>
                            {/* Btn */}
                            <div className="col-span-full">
                                <input type="submit" value='Update Tourists Spot' className="w-full p-2 rounded-md btn bg-green-600 hover:bg-green-600 text-white" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};


export default Update;
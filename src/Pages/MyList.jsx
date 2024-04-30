import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';

import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Navbar from "../Components/Navbar";
import { Helmet } from "react-helmet-async";

const Users = () => {

    const loadedTouristList = useLoaderData()
    const { user } = useContext(AuthContext);
    const remainingTouristList = loadedTouristList.filter(touristItem => touristItem.email == user.email)
    const [touristList, setTouristList] = useState(remainingTouristList);

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://tourism-server-beta.vercel.app/tourists/${id}`, {
                        method: 'DELETE',
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });

                                const remaining = touristList.filter(touristEmail => touristEmail._id !== id)
                                setTouristList(remaining);
                            }
                        })
                }
            })

    }

    return (

        <>
        <Helmet>
                <title>My List - Turio</title>
            </Helmet>
            <div>
                <Navbar></Navbar>
            </div>

            <div className="barlow-condensed-regular w-[900px] py-10 mx-auto border border-1 rounded-lg mt-10">
                <h2 className="text-2xl md:text-4xl font-bold text-center pb-5">My List</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="text-center text-base bg-gray-200 text-black">
                            <tr>
                                <th>Tourist Spot Name</th>
                                <th>Country</th>
                                <th>Location</th>
                                <th>Cost</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-center text-base">
                            {/* row 1 */}
                            {
                                touristList.map((tourist) => <tr key={tourist._id} className="">
                                    <th>{tourist.touristsSpotName}</th>
                                    <td>{tourist.countryName}</td>
                                    <td>{tourist.location}</td>
                                    <td>${tourist.averageCost}</td>
                                    <td>
                                        <div className=" space-x-1">
                                            <Link to={`/update/${tourist._id}`} className="py-2 px-4 rounded-md join-item text-white bg-green-500">Update</Link>
                                            <button onClick={() => handleDelete(tourist._id)} className="py-2 px-4 rounded-md join-item text-white bg-red-500">Delete</button>
                                        </div></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Users;
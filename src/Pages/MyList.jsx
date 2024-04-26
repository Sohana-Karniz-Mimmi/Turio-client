// import { useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import Swal from 'sweetalert2';

import { Link } from "react-router-dom";

const Users = () => {

    // const loadedUsers = useLoaderData()
    // console.log(loadedUsers);
    // const [users, setUsers] = useState(loadedUsers);

    // const handleDelete = id => {
    //     console.log(id);
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //     })
    //         .then((result) => {
    //             if (result.isConfirmed) {
    //                 fetch(`https://coffee-store-server-one-roan.vercel.app/users/${id}`, {
    //                     method: 'DELETE',
    //                 })
    //                     .then(res => res.json())
    //                     .then(data => {
    //                         console.log(data);
    //                         if (data.deletedCount > 0) {
    //                             Swal.fire({
    //                                 title: "Deleted!",
    //                                 text: "Your file has been deleted.",
    //                                 icon: "success"
    //                             });

    //                             const remaining = users.filter(userId => userId._id !== id)
    //                             setUsers(remaining);
    //                         }
    //                     })
    //             }
    //         })

    // }

    return (
        <div className="w-[900px] py-10 mx-auto border border-1 rounded-lg mt-10">
            <h2 className="text-2xl font-bold text-center pb-5">My List</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-center bg-gray-200 text-black">
                        <tr>
                            <th>Name</th>
                            <th>Country</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {/* row 1 */}
                        {/* {
                            users.map((user, indx) => <tr key={user._id}>
                                <t>{indx + 1}</t>
                                <td>{user.email}</td>
                                <td>{user.creationTime}</td>
                                <td>{user.lastLogin}</td>
                                <td><button onClick={() => handleDelete(user._id)} className="btn join-item text-white bg-red-500">X</button></td>
                            </tr>)
                        } */}

                        <tr className="">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>
                                <div className=" space-x-1">
                                <button className="py-2 px-4 rounded-md join-item text-white bg-green-500">Update</button>
                                <button className="py-2 px-4 rounded-md join-item text-white bg-red-500">Delete</button>
                                {/* <Link to={`/updateCoffee/${_id}`} className="btn join-item">Edit</Link>
                                <button onClick={() => handleDelete(_id)} className="btn join-item text-white bg-red-500">X</button> */}
                            </div></td>
                        </tr>
                        <tr className="">
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>
                                <div className=" space-x-1">
                                <button className="py-2 px-4 rounded-md join-item text-white bg-green-500">Update</button>
                                <button className="py-2 px-4 rounded-md join-item text-white bg-red-500">Delete</button>
                                {/* <Link to={`/updateCoffee/${_id}`} className="btn join-item">Edit</Link>
                                <button onClick={() => handleDelete(_id)} className="btn join-item text-white bg-red-500">X</button> */}
                            </div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Navbar from '../Components/Navbar';

const Form = () => {

    // React Hook Form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const { user } = useContext(AuthContext);
    const email = user.email
    const displayName = user.displayName

    const handleSubmitForm = data => {
        // data.preventDefault();
        console.log(data);
        const { countryName, description, photo } = data

        const touristSport = { countryName, description, photo, email, displayName }
        console.log(touristSport);


        fetch(`http://localhost:5000/countries`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(touristSport)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Country Added Successfully",
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

                <form onSubmit={handleSubmit(handleSubmitForm)} className="container mx-auto flex justify-center space-y-12">
                    <fieldset className=" py-10 md:px-16 px-5 rounded-md shadow-sm dark:bg-white border-2 mt-5">
                        <div className="mb-6 text-center">
                            <h3 className="md:text-3xl text-2xl font-extrabold">Country Form</h3>
                        </div>
                        <div className=" md:w-[680px] w-full grid grid-cols-6 gap-4 col-span-full lg:col-span-3">


                            {/* First Row  */}
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm block mb-2">Country Name</label>
                                <div className="relative">
                                    <select {...register("countryName", { required: true })} name="countryName" type="text" required className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent">
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
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm block mb-2">Photo URL</label>
                                <div className="relative">
                                    <input {...register("photo", { required: true })} name="photo" required type="text" className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent" placeholder="Enter Your Photo URL" />
                                    {/* {errors.photo && <span className="text-red-600">Please Enter Your Photo URL</span>} */}

                                </div>
                            </div>

                            {/* User Name  and email */}
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm block mb-2">Your Name</label>
                                <div className="relative">
                                    <input {...register("userName", { required: true })} value={displayName} name="userName" type="text" className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent" />

                                </div>
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label className="text-sm block mb-2">Your Email</label>
                                <div className="relative">
                                    <input {...register("email", { required: true })} name="email" value={user.email} type="text" className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent" />

                                </div>
                            </div>

        
                            {/* description */}
                            <div className="col-span-full">
                                <label className="text-sm block mb-2">Description</label>
                                <div className="relative">
                                    <textarea {...register("description", { required: true })}  name="description" type="text" cols="10" rows="2" placeholder="Write a short description..." className="w-full text-sm border rounded-lg border-gray-300 focus:border-[#333] px-2 py-2 outline-none bg-transparent"></textarea>

                                </div>
                            </div>
                            {/* Btn */}
                            <div className="col-span-full">
                                <input type="submit" value='Add Tourists Spot' className="w-full p-2 rounded-md btn bg-green-600 hover:bg-green-600 text-white" />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};


export default Form;
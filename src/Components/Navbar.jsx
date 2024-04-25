import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
// import logo from "../assets/logo3.svg"

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const navLinks = <>
        <li> <NavLink className={({ isActive }) =>
            isActive ? 'p-0 pb-1 rounded-none text-[16px] border-b-2 font-bold mt-2 border-black' : 'font-bold p-0 hover:pb-1 hover:rounded-none text-[16px] hover:border-b-2 border-black mt-2'
        } to={'/'}> Home </NavLink> </li>

        {/* {user && <> */}
            <li> <NavLink className={({ isActive }) =>
                isActive ? 'p-0 pb-1 rounded-none text-[16px] border-b-2 font-bold mt-2 border-black'
                    :
                    'font-bold p-0 hover:pb-1 hover:rounded-none text-[16px] hover:border-b-2 mt-2 border-black'
            } to={'/allTourists'}>All Tourists Spot </NavLink> </li>
            <li> <NavLink className={({ isActive }) =>
                isActive ? 'p-0 pb-1 rounded-none text-[16px] border-b-2 font-bold mt-2 border-black'
                    :
                    'font-bold p-0 hover:pb-1 hover:rounded-none text-[16px] hover:border-b-2 mt-2 border-black'
            } to={'/addTourists'}> Add Tourists Spot </NavLink> </li>
            <li> <NavLink className={({ isActive }) =>
                isActive ? 'p-0 pb-1 rounded-none text-[16px] border-b-2 font-bold mt-2 border-black'
                    :
                    'font-bold p-0 hover:pb-1 hover:rounded-none text-[16px] hover:border-b-2 mt-2 border-black'
            } to={'/myList'}> My List </NavLink> </li>

        {/* </>} */}


        <li> <NavLink className={({ isActive }) =>
            isActive ? 'p-0 pb-1 rounded-none text-[16px] border-b-2 font-bold mt-2 border-black'
                :
                'font-bold p-0 hover:pb-1 hover:rounded-none text-[16px] hover:border-b-2 mt-2 border-black'
        } to={'/about'}> About Us</NavLink> </li>
    </>


    const handleLogoutBtn = () => {
        logOut()
        navigate('/')
            .then(() => {
                console.log("Sing Out Successfully");
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (

        <div className="navbar p-0 md:px-10 px-1 md:py-6 py-5">
            <div className="navbar-start">

                <details className="dropdown">
                    <summary className="m-1 btn bg-transparent border-none hover:bg-transparent lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-50 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </summary>
                    <ul className="p-2 shadow dropdown-content z-50 bg-base-100 rounded-box w-52 space-y-2">
                    {
                        navLinks
                    }
                    </ul>
                </details>



                {/* <img className="w-full h-full" src="" alt="" /> */}
                <Link to={'/'} className="font-bold text-2xl flex items-center"> MasterTourist </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal space-x-5 ">
                    {
                        navLinks
                    }
                </ul>
            </div>

            {/* NavEnds */}
            <div className="navbar-end">
                {
                    user ? <>
                        <div className="btn btn-ghost btn-circle avatar tooltip hover:tooltip-open tooltip-left text-white" data-tip={user.displayName}>
                            <div className=" w-12 rounded-full ">
                                <img alt={"User"} src={user.photoURL} />
                            </div>
                        </div>
                        <Link to={`/`} onClick={handleLogoutBtn} className="ml-3 md:mr-2 relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                            <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                            <span className="relative md:px-6 md:py-3 px-3 py-2 transition-all ease-out bg-[#141414] rounded-md group-hover:bg-opacity-0 duration-400">
                                <span className="relative text-white md:text-[16px] text-sm">Sing Out</span>
                            </span>
                        </Link>
                    </> 
                    :
                        <>
                            <Link to={`/login`} className="md:mr-2 relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute">

                                </span>
                                <span className="relative md:px-6 md:py-3 px-3 py-2 transition-all ease-out bg-[#141414] rounded-md group-hover:bg-opacity-0 duration-400">
                                    <span className="relative text-white md:text-[16px] text-sm">Login</span>
                                </span>
                            </Link>
                            <Link to={`/register`} className=" relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                                <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
                                <span className="relative md:px-6 md:py-3 px-3 py-2 transition-all ease-out bg-[#141414] rounded-md group-hover:bg-opacity-0 duration-400">
                                    <span className="relative text-white md:text-[16px] text-sm">Register</span>
                                </span>
                            </Link>
                        </>
                }

            </div>
        </div>
    );
};


export default Navbar;
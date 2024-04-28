import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaBuilding, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook, FaSquareTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#131318]">

            <div className="container mx-auto md:pt-24 pt-12 md:pb-4 flex flex-col lg:flex-row lg:justify-between lg:items-start items-center gap-10 max-w-6xl">

                {/* <!-- item1 --> */}
                <div className=" md:w-[300px] lg:text-start text-center">
                    <h3 className="text-white font-bold text-lg">DREAM HOME</h3>
                    <p className="text-[#FFFFFF99] mt-4 pb-6">Dream Home is committed to delivering a high level of expertise, customer service, and attention to detail to the marketing and sales of luxury real estate, and rental properties. </p>

                </div>


                {/* <!-- item2 --> */}

                <div className="">
                    <h2 className="text-white lg:text-start text-center font-bold text-lg mb-2">CONTACT</h2>
                    <div className="flex flex-col space-y-4 text-[#FFFFFF99] text-sm">

                        <div className="flex items-center gap-1 mt-4 cursor-pointer">
                            <FaBuilding />
                            <span className="text-[#FFFFFFCC] ml-4">(+62) 3755  Dream Home</span>
                        </div>

                        <div className="flex items-center gap-1 mt-4 cursor-pointer">
                            <IoCall />
                            <span className="text-[#FFFFFFCC] ml-4">(+62) 123-321-543</span>
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                            <MdEmail />
                            <span className=" text-[#FFFFFFCC] ml-4">sohanasheikh81@gmail.com</span>
                        </div>
                    </div>
                </div>

                {/* <!-- item3 --> */}

                <div className="">
                    <h2 className="text-white font-bold text-lg mb-2">QUICK LINKS</h2>
                    <div className="flex flex-col lg:text-start text-center space-y-4 text-[#FFFFFF99] text-sm">
                            <Link to={`/about`} className="no-underline hover:underline cursor-pointer">About</Link>
                            
                            <Link to={`/locations`} className="no-underline cursor-pointer hover:underline">Site Map</Link>
                            <Link to={`/`} className="no-underline cursor-pointer hover:underline">Support Center</Link>
                            <Link to={`/`} className="no-underline cursor-pointer hover:underline">Terms Conditions</Link>



                    </div>
                </div>


                {/* <!-- item4 --> */}
                <div className="">
                    <h2 className="text-white font-bold text-lg mb-7">SOCIAL LINKS:</h2>
                    <div className="flex flex-col space-y-4 text-[#FFFFFF99] text-sm">
                        <div className="bg-[#1313180C] rounded-2xl flex justify-center items-center">
                            <div className="space-x-2 text-3xl flex">
                                <Link><FaSquareTwitter /></Link>
                                <Link>
                                    <FaSquareFacebook />
                                </Link>
                                <Link>
                                    <FaLinkedin />
                                </Link>
                                <Link>
                                    <FaGithub />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="footer footer-center p-4 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by Dream Home Company Ltd</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;
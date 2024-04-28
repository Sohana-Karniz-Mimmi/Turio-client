import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
// import Navbar from "../Components/Navbar";

const MainLayout = () => {
    return (
        <div className="">
            {/* <Navbar></Navbar> */}
            <div className="min-h-[calc(100vh-352px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
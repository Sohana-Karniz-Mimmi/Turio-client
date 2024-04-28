import { RiSendPlaneFill } from "react-icons/ri";
import Banner from "../Components/Banner";
import TouristsSpots from "../Components/TouristsSpots";
import contact from "../assets/images/update-bg.png"
import Team from "../Components/Team";
import Countries from "../Components/Countries";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TouristsSpots></TouristsSpots>
            <Team></Team>
            <Countries></Countries>
            <section className=" relative bg-cover bg-center bg-no-repeat h-[340px]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${contact})` }}>

                <div className=" container lg:flex items-center justify-between h-[340px] py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-32">
                    <div className="">
                        <h2 className="md:text-5xl text-3xl lg:mt-0 mt-8 font-semibold mb-2 text-white">JOIN US FOR MORE UPDATE</h2>
                        <p className="text-[17px] lg:w-[623px] md:w-[550px] w-80 text-white">Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis hendrerit a id lectus.
                            Suspendissendt blandit interdum.</p>
                    </div>
                    <div className=" lg:mt-0 mt-10 inline-flex items-center  bg-green-600 dark:text-gray-100 hover:bg-transparent border border-green-600">
                        <button type="button" className="px-8 py-3.5 font-semibold">Join Now</button>
                    </div>



                </div>

            </section>
        </div>
    );
};

export default Home;
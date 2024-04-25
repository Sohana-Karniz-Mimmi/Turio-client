import slider1 from '../assets/images/Banner Slider/slider1.jpg'
import slider2 from '../assets/images/Banner Slider/slider2.jpg'
import slider3 from '../assets/images/Banner Slider/slider3.jpg'
import slider4 from '../assets/images/Banner Slider/slider4.jpg'
import Navbar from './Navbar';

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import 'swiper/css/effect-fade';
import { Navigation, Autoplay, EffectFade} from 'swiper/modules';


const Banner = () => {
    return (
        <Swiper
        navigation={true} 
        effect="fade"
        modules={[Navigation, Autoplay, EffectFade]}
        // autoplay={{
        //     delay: 3000,
        //   }}
        loop={true}
        >
            <SwiperSlide>
                <section   className="relative bg-cover bg-center bg-no-repeat h-[565px]" style={{ backgroundImage: `url(${slider2})` }}>

                    <div
                        className="absolute inset-0 sm:bg-transparent  sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                    >
                    </div>

                    <div
                        className="relative lg:h-screen lg:items-center lg:px-8"
                    >
                        <div>
                            {/* <Navbar></Navbar> */}
                        </div>
                        <div className='flex items-center justify-center h-[585px]'>
                            <div data-aos="fade-up" data-aos-duration="500"  className=" text-white mx-auto md:max-w-[700px] text-center ltr:sm:text-left rtl:sm:text-right bg-[#00000080] p-10 rounded-lg">
                                <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="text-3xl font-extrabold sm:text-5xl">
                                    Find Your Dream Home
                                </h1>

                                <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700" className="mt-4 max-w-lg sm:text-lg/relaxed">
                                    We are recognized for exceeding client expectations and delivering great results through dedication, ease of process, and extraordinary services
                                </p>
                            </div>
                        </div>
                    </div>

                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className="relative bg-cover bg-center bg-no-repeat h-[565px]" style={{ backgroundImage: `url(${slider3})` }}>

                    <div
                        className="absolute inset-0 sm:bg-transparent  sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                    >
                    </div>

                    <div
                        className="relative lg:h-screen lg:items-center lg:px-8"
                    >
                        <div>
                            {/* <Navbar></Navbar> */}
                        </div>
                        <div className='flex items-center justify-center h-[585px]'>
                            <div className="text-white mx-auto md:max-w-[700px] text-center ltr:sm:text-left rtl:sm:text-right bg-[#00000080] p-10 rounded-lg">
                                <h1 className="text-3xl font-extrabold sm:text-5xl">
                                    Find Your Dream Home
                                </h1>

                                <p className="mt-4 max-w-lg sm:text-lg/relaxed">
                                    We are recognized for exceeding client expectations and delivering great results through dedication, ease of process, and extraordinary services
                                </p>
                            </div>
                        </div>
                    </div>

                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className="relative bg-cover bg-center bg-no-repeat h-[565px]" style={{ backgroundImage: `url(${slider1})` }}>

                    <div
                        className="absolute inset-0 sm:bg-transparent  sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                    >
                    </div>

                    <div
                        className="relative lg:h-screen lg:items-center lg:px-8"
                    >
                        <div>
                            {/* <Navbar></Navbar> */}
                        </div>
                        <div className='flex items-center justify-center h-[585px]'>
                            <div className="text-white mx-auto md:max-w-[700px] text-center ltr:sm:text-left rtl:sm:text-right bg-[#00000080] p-10 rounded-lg">
                                <h1 className="text-3xl font-extrabold sm:text-5xl">
                                    Find Your Dream Home
                                </h1>

                                <p className="mt-4 max-w-lg sm:text-lg/relaxed">
                                    We are recognized for exceeding client expectations and delivering great results through dedication, ease of process, and extraordinary services
                                </p>
                            </div>
                        </div>
                    </div>

                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className="relative bg-cover bg-center bg-no-repeat h-[565px]" style={{ backgroundImage: `url(${slider4})` }}>

                    <div
                        className="absolute inset-0 sm:bg-transparent  sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                    >
                    </div>

                    <div
                        className="relative lg:h-screen lg:items-center lg:px-8"
                    >
                        <div>
                            {/* <Navbar></Navbar> */}
                        </div>
                        <div className='flex items-center justify-center h-[585px]'>
                            <div className="text-white mx-auto md:max-w-[700px] text-center ltr:sm:text-left rtl:sm:text-right bg-[#00000080] p-10 rounded-lg">
                                <h1 className="text-3xl font-extrabold sm:text-5xl">
                                    Find Your Dream Home
                                </h1>

                                <p className="mt-4 max-w-lg sm:text-lg/relaxed">
                                    We are recognized for exceeding client expectations and delivering great results through dedication, ease of process, and extraordinary services
                                </p>
                            </div>
                        </div>
                    </div>

                </section>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;
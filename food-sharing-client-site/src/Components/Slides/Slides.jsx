import { Typewriter } from 'react-simple-typewriter';
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function App() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const [swiper, setSwiper] = useState(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        if (progressCircle.current && progressContent.current) {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    return (
        <div className='max-w-7xl mx-auto'>

            <Swiper
                onSwiper={setSwiper}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper rounded-lg"
            >
                <SwiperSlide>
                    <div className="slide slider-1 flex flex-col  items-center relative bottom-14">
                        <h2 className="text-3xl lg:text-6xl font-semibold mb-2 text-[#f5bd5a]">


                            <Typewriter
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={3000}
                                words={['Join Us in Feeding Communities']}

                            />

                        </h2>

                        <p className='text-base lg:text-xl text-center text-white w-[80%] lg:w-[60%]'>Discover a platform dedicated to reducing food waste by connecting surplus food with those in need. Be part of a movement that fosters community and compassion through food sharing.</p>


                        <Link to='/availableFood'>
                            <button className='btn text-white bg-[#f5bd5a] p-2 outline-none mt-6 border-none text-xl'>Available Foods</button>
                        </Link>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slider-2 flex flex-col  items-center relative bottom-14">
                        <h2 className="text-3xl lg:text-6xl font-semibold mb-2 text-[#f5bd5a]">


                            <Typewriter
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={3000}
                                words={['Empowering Communities']}

                            />

                        </h2>
                        <p className="text-base lg:text-xl text-center text-white w-[80%] lg:w-[60%]">
                            Explore our platforms mission to empower communities by redistributing surplus food resources. Together, we can make a difference in combating hunger and promoting sustainability.
                        </p>
                        <Link to='/availableFood'>
                            <button className='btn text-white bg-[#f5bd5a] p-2 outline-none mt-6 border-none text-xl'>Available Foods</button>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slider-3 flex flex-col  items-center relative bottom-14">
                        <h2 className="text-3xl lg:text-6xl font-semibold mb-2 text-[#f5bd5a]">


                            <Typewriter
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={3000}
                                words={['Together, We Can Make a Difference']}

                            />

                        </h2>
                        <p className="text-base lg:text-xl text-center text-white w-[80%] lg:w-[60%]">
                            Experience the impact of collective action as we work towards reducing food waste and ensuring no one goes hungry. Join us in building a future where surplus food finds its way to those who need it most.
                        </p>
                        <Link to='/availableFood'>
                            <button className='btn text-white bg-[#f5bd5a] p-2 outline-none mt-6 border-none text-xl'>Available Foods</button>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slider-4 flex flex-col  items-center relative bottom-14">
                        <h2 className="text-3xl lg:text-6xl font-semibold mb-2 text-[#f5bd5a]">


                            <Typewriter
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={3000}
                                words={['Creating Connections Through Food']}

                            />

                        </h2>
                        <p className="text-base lg:text-xl text-center text-white w-[80%] lg:w-[60%]">
                            Discover the power of food to connect people and foster meaningful relationships. Our platform facilitates the sharing of surplus food, fostering a sense of community and solidarity.
                        </p>
                        <Link to='/availableFood'>
                            <button className='btn text-white bg-[#f5bd5a] p-2 outline-none mt-6 border-none text-xl'>Available Foods</button>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slider-5 flex flex-col  items-center relative bottom-14">
                        <h2 className="text-3xl lg:text-6xl font-semibold mb-2 text-[#f5bd5a]">


                            <Typewriter
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={3000}
                                words={['Building a Sustainable Future']}

                            />

                        </h2>
                        <p className="text-base lg:text-xl text-center text-white w-[80%] lg:w-[60%]">
                            Be part of a movement towards sustainability by participating in our surplus food redistribution platform. Together, we can minimize waste and create a more sustainable future for generations to come.
                        </p>
                        <Link to='/availableFood'>
                            <button className='btn text-white bg-[#f5bd5a] p-2 outline-none mt-6 border-none text-xl'>Available Foods</button>
                        </Link>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slider-6 flex flex-col  items-center relative bottom-14">
                        <h2 className="text-3xl lg:text-6xl font-semibold mb-2 text-[#f5bd5a]">


                            <Typewriter
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={3000}
                                words={['Transforming Surplus into Solutions']}

                            />

                        </h2>
                        <p className="text-base lg:text-xl text-center text-white w-[80%] lg:w-[60%]">
                            Explore innovative solutions to surplus food management through our platform. Join us in transforming surplus into opportunities, addressing hunger, and promoting environmental stewardship.
                        </p>
                        <Link to='/availableFood'>
                            <button className='btn text-white bg-[#f5bd5a] p-2 outline-none mt-6 border-none text-xl'>Available Foods</button>
                        </Link>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="autoplay-progress" slot="container-end">
                <span ref={progressContent}></span>
            </div>



        </div>
    );
}
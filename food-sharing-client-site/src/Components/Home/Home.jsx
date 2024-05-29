import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import Loader from "../Loader/Loader";




import { Typewriter } from "react-simple-typewriter";
import Banner from "../Banner/Banner";
import { Link, useLoaderData } from "react-router-dom";
import FeaturedFoods from "../FeaturedFoods/FeaturedFoods";

import AskedQuestions from "../Questions/AskedQuestions";
import HappyClients from "../HappyClients/HappyClients";

const pageVariants = {
    initial: {
        opacity: 0,
        x: "-100vw"
    },
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opacity: 0,
        x: "100vw"
    }
};



const pageTransition = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.9
};



const Home = () => {

    // const data = useLoaderData();
    // console.log(data);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://food-sharing-server-site.vercel.app/highestQuantityFood')
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
    }, [])

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        document.title = "DinerZZ|Home";
    }, [])

    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false);
        }, 1000)
        return () => clearTimeout(delay);
    }, [])

    return (
        <div>
            {loading && <Loader></Loader>}
            {!loading &&

                <motion.div

                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}


                >

                    <Banner></Banner>
                    <div className="max-w-6xl mx-auto">

                        <h1 className="text-3xl poppins font-bold text-center mt-9">


                            <Typewriter
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                                words={['Featured Foods🍴']}
                            />

                        </h1>
                        <div className="divider"></div>
                        <p className="text-xl poppins text-gray-400 text-center mt-4 mb-5">A culinary delight is a dish or cuisine that tantalizes taste buds and brings people together to <br /> indulge in its exquisite flavors, rich heritage, and mouthwatering aromas. <br /> Featured foods on our platform are culinary treasures that <br /> draw food enthusiasts from far and wide, showcasing diverse tastes, cultural traditions, and gastronomic experiences. </p>



                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            {
                                data.slice(0, 6).map((singleData) => <FeaturedFoods key={singleData._id} data={singleData}></FeaturedFoods>)
                            }
                        </div>

                        <div className="mt-6 text-center">
                            <Link to='/availableFood'>
                                <button className="btn text-white bg-[#f5bd5a] text-xl p-2">ShowAll button</button>
                            </Link>
                        </div>

                        <AskedQuestions></AskedQuestions>

                        <HappyClients></HappyClients>

                    </div>


                </motion.div>

            }
        </div>
    );
};

export default Home;
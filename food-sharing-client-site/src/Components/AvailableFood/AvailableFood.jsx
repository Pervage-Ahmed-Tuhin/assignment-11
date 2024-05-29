
import { useEffect, useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";
import { useLoaderData } from "react-router-dom";
import FeaturedFoods from "../FeaturedFoods/FeaturedFoods";



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




const AvailableFood = () => {
    const [sortedFoods, setSortedFoods] = useState([]);
    const loadedData = useLoaderData();
    // console.log(loadedData);
    const [loading, setLoading] = useState(true);
    const [isTwoColumnLayout, setIsTwoColumnLayout] = useState(false);
    useEffect(() => {
        document.title = "DinerZZ|Available Food";
    }, [])

    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false);
        }, 1000)
        return () => clearTimeout(delay);
    }, [])

    const sortByElement = (items) => {
        const sorted = [...loadedData].sort((a, b) => {
            const dateA = new Date(a[items]);
            const dateB = new Date(b[items]);
            return dateA - dateB;
        });
        setSortedFoods(sorted);
    };
    const handleSearch = () => {
        const inputField = document.getElementById('searchField');
        // console.log(inputField.value);
        const searchTerm = inputField.value.trim().toLowerCase();
        const filteredFoods = loadedData.filter((food) =>
            food.foodName.toLowerCase().includes(searchTerm)
        );
        setSortedFoods(filteredFoods);
    }

    const toggleLayout = () => {
        setIsTwoColumnLayout((prevLayout) => !prevLayout);
    };
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


                    <div className="max-w-6xl mx-auto">


                        <div className="text-center flex flex-col md:flex-row items-center justify-center">
                            <div className="w-1/2 space-y-2 md:space-y-0">
                                <input id="searchField" type="text" placeholder="Type here" className=" input input-bordered w-full md:max-w-md " />
                                <button onClick={handleSearch} className="btn text-white bg-[#f5bd5a] p-2 w-auto md:w-32 h-[50px] "><FaMagnifyingGlass className="text-sm" />Search</button>
                            </div>
                            <div>
                                <button onClick={toggleLayout} className="m-1 btn bg-[#f5bd5a] text-white w-auto md:w-32">ChangeLayout</button>
                            </div>
                            <details className="dropdown">
                                <summary className="m-1 btn bg-[#f5bd5a] text-white">Sort Your Spots</summary>
                                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                    <li onClick={() => sortByElement('expiredDateTime')}><a>Expired Date</a></li>

                                </ul>
                            </details>
                        </div>

                        <div className={`grid grid-cols-1 md:grid-cols-${isTwoColumnLayout ? '2' : '3'} gap-6`}>

                            {


                                sortedFoods.length > 0 ? sortedFoods.map((data) => (
                                    <FeaturedFoods key={data._id} data={data}></FeaturedFoods>
                                )) : loadedData.map((data) => (
                                    <FeaturedFoods key={data._id} data={data}></FeaturedFoods>

                                ))

                            }


                        </div>


                    </div>

                </motion.div>

            }
        </div>
    );
};

export default AvailableFood;

import { useContext, useEffect, useState } from "react";

import { motion } from "framer-motion";
import Loader from "../Loader/Loader";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../Authprovider/AuthProvider";




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



const MyfoodRequest = () => {

    // const loadedData = useLoaderData();
    // console.log(loadedData);
    const { user } = useContext(AuthContext);
    const [loadedData, setLoadedData] = useState([]);
    const axiosSecure = useAxiosSecure();
    const url = `/requestedFood?email=${user?.email}`
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        // fetch(url, { credentials: 'include' })
        //     .then(res => res.json())
        //     .then(data => setBookings(data))

        axiosSecure.get(url)
            .then(res => setLoadedData(res.data))

    }, [url, axiosSecure]);

    useEffect(() => {
        document.title = "DinerZZ|My Food Request";
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


                    <div className="max-w-6xl mx-auto space-y-4">
                        {
                            loadedData.map(data => {

                                return (
                                    <div key={data._id} className="flex flex-col md:flex-row justify-center items-center gap-5 bg-[#f5bd5a] shadow-xl p-5">
                                        <figure><img className="w-full rounded-lg" src={data.foodImage} alt="Movie" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">DonarName:{data.donator.name}</h2>
                                            <h2 className="card-title">pickupLocation:{data.pickupLocation}</h2>
                                            <h2 className="card-title">expiredDateTime:{data.expiredDateTime}</h2>
                                            <h2 className="card-title">RequestDate:{data.requestDate}</h2>

                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>

                </motion.div>

            }
        </div>
    );
};

export default MyfoodRequest;
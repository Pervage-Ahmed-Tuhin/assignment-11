import { useContext, useEffect, useState } from "react";
import wave2 from '../../assets/img/Polygon Luminary 2.svg';
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";
import { AuthContext } from "../Authprovider/AuthProvider";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { key } from "localforage";






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



const ManageFoods = () => {
    const { user } = useContext(AuthContext);
    const [loadedData, setLoadedData] = useState([]);
    const axiosSecure = useAxiosSecure();
    const url = `/manageFood?email=${user?.email}`;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosSecure.get(url)
            .then(res => setLoadedData(res.data))
    }, [url, axiosSecure]);

    useEffect(() => {
        document.title = "DinerZZ|Manage My Food";
    }, [])

    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false);
        }, 1000)
        return () => clearTimeout(delay);
    }, [])
    // console.log(loadedData);


    const handleDelete = _id => {
        // console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(` https://food-sharing-server-site.vercel.app/delete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your food item has been deleted.',
                                'success'
                            )

                            setLoadedData(prevData => prevData.filter(item => item._id !== _id));
                        }
                    })

            }
        })
    }

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

                    

                    <div className="max-w-6xl mx-auto rounded-lg min-h-[100vh]" style={{ backgroundImage: `url(${wave2})` }}>


                        <div className="overflow-x-auto poppins text-gray-900">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr className="text-xl">
                                        <th>Food Name</th>
                                        <th>Food Info</th>


                                    </tr>
                                </thead>

                                {
                                    loadedData.map(soloData => (
                                        <tbody key={soloData._id}>
                                            {/* row 1 */}
                                            <tr>
                                                <td>
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-squircle w-12 h-12">
                                                                <img src={soloData.foodImage} alt="Food" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-bold mb-3">{soloData.foodName}</div>
                                                            <div className="space-y-3">
                                                                <p>Donator: {soloData.donator.name}</p>
                                                                <p>Email: {soloData.donator.email}</p>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="space-y-3">
                                                        <p>FoodQuantity: {soloData.foodQuantity}</p>
                                                        <p>PickupLocation: {soloData.pickupLocation}</p>
                                                        <p>ExpiredDateTime: {soloData.expiredDateTime}</p>
                                                    </div>
                                                </td>

                                                <td className="space-y-3">
                                                    <Link to={`/updateDataBase/${soloData._id}`}>

                                                        <button className="btn outline-none border-none  btn-sm w-full  bg-red-900 text-white">Update</button>
                                                    </Link>


                                                    <button

                                                        onClick={() => handleDelete(soloData._id)}

                                                        className="btn outline-none border-none btn-sm w-full  bg-red-900 text-white">Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    ))
                                }





                            </table>
                        </div>


                    </div>

                </motion.div>

            }
        </div>
    );
};

export default ManageFoods;
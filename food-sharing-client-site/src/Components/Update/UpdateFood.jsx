import { useLoaderData, useNavigate, useParams } from "react-router-dom";

import { useContext, useEffect, useState } from "react";

import wave2 from '../../assets/img/Polygon Luminary 2.svg';
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";
import Marquee from "react-fast-marquee";
import Swal from "sweetalert2";
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



const UpdateFood = () => {
    const { id } = useParams();
    // console.log(id)
    const { user } = useContext(AuthContext);
    const loadedData = useLoaderData();
    // console.log(loadedData);

    const navigate = useNavigate();


    const [loading, setLoading] = useState(true);
    useEffect(() => {
        document.title = "DinerZZ|update Food";
    }, [])

    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false);
        }, 1000)
        return () => clearTimeout(delay);
    }, [])
    const { foodImage, foodName, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, foodStatus } = loadedData;
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const foodImage = form.foodImage.value;
        const foodName = form.foodName.value;
        const foodQuantity = form.foodQuantity.value;
        const pickupLocation = form.pickupLocation.value;
        const expiredDateTime = form.expiredDateTime.value;
        const additionalNotes = form.additionalNotes.value;
        const foodStatus = form.foodStatus.value;



        const UserEmail = user.email;
        const UserName = user.displayName;
        // console.log(UserEmail, UserName);
        const userImage = user.photoURL;
        const donator = {
            image: userImage,
            name: UserName,
            email: UserEmail
        }

        console.log(donator);
        const updatedFood = { foodImage, foodName, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, foodStatus, donator, UserEmail };
        // console.log(image, touristsSpotName, countryName, location, averageCost, seasonality, travelTime, totalVisitorsPerYear, textarea);
        // console.log(updatedFood);

        fetch(`https://food-sharing-server-site.vercel.app/manageUpdateFood/${id}`, {
            credentials: 'include',
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedFood)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
                    navigate('/manageMyFoods');
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


                    <div className="max-w-6xl mx-auto">


                        <Marquee className="marquee w-full overflow-hidden" speed={200}>
                            <h1 className="text-2xl md:text-3xl font-bold text-[#f5bd5a]">🍔Update Your Food!🍔</h1>
                        </Marquee>
                        <div className=" p-24" style={{ backgroundImage: `url(${wave2})` }}>
                            <h2 className="text-3xl font-extrabold text-white">Update Food</h2>
                            <form onSubmit={handleUpdate} className="md:w-full">
                                {/* form name and quantity row */}
                                <div className="grid md:grid-cols-2 gap-4 mb-8">
                                    <div className="form-control">
                                        <label className="label text-white">
                                            <span className="label-text text-white text-xl">Food image</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name="foodImage" placeholder="foodImage" className="input input-bordered w-full" defaultValue={foodImage} />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label text-white">
                                            <span className="label-text text-white text-xl">Food Name</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name="foodName" placeholder="foodName" className="input input-bordered w-full" defaultValue={foodName} />
                                        </label>
                                    </div>
                                </div>
                                {/* form supplier row */}
                                <div className="grid md:grid-cols-2 gap-4 mb-8">
                                    <div className="form-control">
                                        <label className="label text-white">
                                            <span className="label-text text-white text-xl">foodQuantity</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name="foodQuantity" placeholder="foodQuantity" defaultValue={foodQuantity} className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label text-white">
                                            <span className="label-text text-white text-xl">pickupLocation</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name="pickupLocation" defaultValue={pickupLocation} placeholder="pickupLocation" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                </div>
                                {/* form category and details row */}
                                <div className="grid md:grid-cols-2 gap-4 mb-8">
                                    <div className="form-control">
                                        <label className="label text-white">
                                            <span className="label-text text-white text-xl">expiredDateTime</span>
                                        </label>
                                        <label className="input-group ">
                                            <input type="text" name="expiredDateTime" defaultValue={expiredDateTime} placeholder="expiredDateTime" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label text-white">
                                            <span className="label-text text-white text-xl">foodStatus</span>
                                        </label>
                                        <select className="input input-bordered w-full text-gray-400" name="foodStatus" defaultValue={foodStatus} id="">
                                            <option className="text-gray-400" value="available">available</option>
                                            <option className="text-gray-400" value="not available">not available</option>
                                        </select>

                                    </div>
                                </div>



                                {/* form Photo url row */}
                                <label className="label text-white">
                                    <span className="label-text text-white text-xl">additionalNotes</span>
                                </label>
                                <textarea
                                    defaultValue={additionalNotes}
                                    className="border rounded-md p-2 focus:outline-none focus:border-blue-500 w-full"
                                    name="additionalNotes"
                                    id=""
                                    cols="30"
                                    rows="10"
                                    placeholder="Enter your text here..."
                                ></textarea>
                                <input type="submit" value="Update Food" className="btn btn-block text-gray-600 " />
                            </form>


                        </div>


                    </div>

                </motion.div>

            }
        </div>
    );
};

export default UpdateFood;
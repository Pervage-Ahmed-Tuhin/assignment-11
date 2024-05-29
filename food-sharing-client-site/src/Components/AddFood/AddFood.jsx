
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


const AddFood = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        document.title = "DinerZZ|Add Food";
    }, [])

    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false);
        }, 1000)
        return () => clearTimeout(delay);
    }, [])



    const handleAddition = (event) => {
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
        // console.log(donator);
        const newFood = { foodImage, foodName, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, foodStatus, donator };
        // console.log(image, touristsSpotName, countryName, location, averageCost, seasonality, travelTime, totalVisitorsPerYear, textarea);
        // console.log(newFood);

        fetch('https://food-sharing-server-site.vercel.app/addedFood', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset();
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
                            <h1 className="text-2xl md:text-3xl font-bold text-[#f5bd5a]">🍔Add Your Food!🍔</h1>
                        </Marquee>
                        <div className=" p-24" style={{ backgroundImage: `url(${wave2})` }}>
                            <h2 className="text-3xl font-extrabold text-white">Add Food</h2>
                            <form onSubmit={handleAddition} className="md:w-full">
                                {/* form name and quantity row */}
                                <div className="grid md:grid-cols-2 gap-4 mb-8">
                                    <div className="form-control">
                                        <label className="label text-white">
                                            <span className="label-text text-white text-xl">Food image</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name="foodImage" placeholder="foodImage" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label text-white">
                                            <span className="label-text text-white text-xl">Food Name</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name="foodName" placeholder="foodName" className="input input-bordered w-full" />
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
                                            <input type="text" name="foodQuantity" placeholder="foodQuantity" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label text-white">
                                            <span className="label-text text-white text-xl">pickupLocation</span>
                                        </label>
                                        <label className="input-group">
                                            <input type="text" name="pickupLocation" placeholder="pickupLocation" className="input input-bordered w-full" />
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
                                            <input type="text" name="expiredDateTime" placeholder="expiredDateTime" className="input input-bordered w-full" />
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label text-white">
                                            <span className="label-text text-white text-xl">foodStatus</span>
                                        </label>
                                        <select className="input input-bordered w-full text-gray-400" name="foodStatus" id="">
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
                                    className="border rounded-md p-2 focus:outline-none focus:border-blue-500 w-full"
                                    name="additionalNotes"
                                    id=""
                                    cols="30"
                                    rows="10"
                                    placeholder="Enter your text here..."
                                ></textarea>
                                <input type="submit" value="Add Food" className="btn btn-block text-gray-400 " />
                            </form>


                        </div>


                    </div>

                </motion.div>

            }
        </div>
    );
};

export default AddFood;
import { useLoaderData } from "react-router-dom";

import wave2 from '../../assets/img/detailsimage.svg';

import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { Typewriter } from "react-simple-typewriter";
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


const FoodDetails = () => {
    const { user } = useContext(AuthContext);

    const loadedData = useLoaderData();
    const [loading, setLoading] = useState(true);

    // console.log(user.displayName);
    // console.log(user.email);
    useEffect(() => {
        document.title = "Joy land|AllTourist";
    }, [])
    useEffect(() => {
        const delay = setTimeout(() => {
            setLoading(false);
        }, 1000)
        return () => clearTimeout(delay);
    }, [])


    useEffect(() => {
        document.title = "DinerZZ|Details page";
    }, [])
    const { foodImage, foodName, donator, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, _id, foodStatus } = loadedData;
    const { image, name, email } = donator;

    const handleAddition = (event) => {
        event.preventDefault();
        const form = event.target;


        const requestDate = form.requestDate.value;

        const additionalNotes = form.additionalNotes.value;

        const userEmail = user.email;

        const userName = user.displayName;





        // console.log(donator);
        const newFood = { additionalNotes, requestDate, userEmail ,userName};
        // console.log(image, touristsSpotName, countryName, location, averageCost, seasonality, travelTime, totalVisitorsPerYear, textarea);
        // console.log(newFood);

        fetch(`https://food-sharing-server-site.vercel.app/requestFood/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Requested Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    document.getElementById('my_modal_5').close();
                    form.reset();
                }
            })

    }
    const now = new Date();
    // console.log(now);


    return (
        <div>
            {loading && <Loader></Loader>}
            {!loading &&

                <motion.div className="hero min-h-screen" style={{ backgroundImage: `url(${wave2})` }}


                    initial="initial"
                    animate="in"
                    exit="out"
                    variants={pageVariants}
                    transition={pageTransition}


                >
                    <div className="hero-content flex-col lg:flex-row gap-8">
                        <img src={foodImage} className="max-w-xs lg:max-w-xl rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-2xl lg:text-5xl font-bold text-red-900">Food Name :

                                <Typewriter
                                    loop
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                    words={[foodName]}
                                />



                            </h1>
                            <div className="divider"></div>
                            <div className="space-y-6">
                                <h1 className="poppins text-2xl font-bold text-red-900 ">Additional Notes: <br /></h1>
                                <p className="py-6 poppins text-red-900 text-2xl ">{additionalNotes}</p>

                                <h1 className="poppins"><span className="text-xl lg:text-2xl font-bold text-red-900">Donor Name:</span> <span className="text-red-900 text-xl lg:text-2xl ">{name}</span></h1>
                                <h1 className="poppins"><span className="text-xl lg:text-2xl  font-bold text-red-900">Pick Up Location:</span> <span className="text-red-900 text-xl lg:text-2xl ">{pickupLocation}</span></h1>
                                <h1 className="poppins"><span className="text-xl lg:text-2xl font-bold text-red-900">Food Quantity:</span> <span className="text-red-900 text-xl lg:text-2xl ">{foodQuantity}</span></h1>


                                <h1 className="poppins"><span className="text-xl lg:text-2xl  font-bold text-red-900">Expire Date/Time:</span> <span className="text-red-900 text-xl lg:text-2xl ">{expiredDateTime}$</span></h1>

                                <h1 className="poppins"><span className="text-xl lg:text-2xl  font-bold text-red-900">FoodStatus:</span> <span className="text-red-900 text-xl lg:text-2xl ">{foodStatus}✨</span></h1>


                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn btn-block text-white bg-red-900 outline-none border-none" onClick={() => document.getElementById('my_modal_5').showModal()}>Request</button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box" style={{ backgroundImage: `url(${wave2})` }}>

                                        <img src={foodImage} className="w-full rounded-lg shadow-2xl" />
                                        <form onSubmit={handleAddition} className="md:w-full">
                                            {/* form name and quantity row */}
                                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                                <div className="form-control">
                                                    <label className="label text-white">
                                                        <span className="label-text text-white text-xl">Food image</span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="text" name="foodImage" defaultValue={foodImage} className="input input-bordered w-full" disabled />
                                                    </label>
                                                </div>
                                                <div className="form-control">
                                                    <label className="label text-white">
                                                        <span className="label-text text-white text-xl">Food Name</span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="text" name="foodName" defaultValue={foodName} className="input input-bordered w-full" disabled />
                                                    </label>
                                                </div>
                                            </div>
                                            {/* form supplier row */}
                                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                                <div className="form-control">
                                                    <label className="label text-white">
                                                        <span className="label-text text-white text-xl">foodId</span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="text" name="foodId" defaultValue={_id} className="input input-bordered w-full" disabled />
                                                    </label>
                                                </div>
                                                <div className="form-control">
                                                    <label className="label text-white">
                                                        <span className="label-text text-white text-xl">DonatorName</span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="text" name="name" defaultValue={name} className="input input-bordered w-full" disabled />
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                                <div className="form-control">
                                                    <label className="label text-white">
                                                        <span className="label-text text-white text-xl">User Email</span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="text" name="" defaultValue={user.email} className="input input-bordered w-full" disabled />
                                                    </label>
                                                </div>
                                                <div className="form-control">
                                                    <label className="label text-white">
                                                        <span className="label-text text-white text-xl">Donor Email</span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="text" name="email" defaultValue={email} className="input input-bordered w-full" disabled />
                                                    </label>
                                                </div>
                                                <div className="form-control">
                                                    <label className="label text-white">
                                                        <span className="label-text text-white text-xl">Current Time</span>
                                                    </label>
                                                    <label className="input-group">
                                                        <input type="text" name="requestDate" defaultValue={now} className="input input-bordered w-full" disabled />
                                                    </label>
                                                </div>
                                            </div>
                                            {/* form category and details row */}
                                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                                <div className="form-control">
                                                    <label className="label text-white">
                                                        <span className="label-text text-white text-xl">PickUpLocation</span>
                                                    </label>
                                                    <label className="input-group ">
                                                        <input type="text" name="pickupLocation" defaultValue={pickupLocation} className="input input-bordered w-full" disabled />
                                                    </label>
                                                </div>
                                                <div className="form-control">
                                                    <label className="label text-white">
                                                        <span className="label-text text-white text-xl">Expired Date</span>
                                                    </label>
                                                    <label className="input-group ">
                                                        <input type="text" name="expiredDateTime" defaultValue={expiredDateTime} className="input input-bordered w-full" disabled />
                                                    </label>


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
                                            <input type="submit" value="Request Food" className="btn btn-block bg-red-900 text-white border-none outline-none " />
                                        </form>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>

                            </div>


                        </div>
                    </div>
                </motion.div>

            }
        </div>
    );
};

export default FoodDetails;
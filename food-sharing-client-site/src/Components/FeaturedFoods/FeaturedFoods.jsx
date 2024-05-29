import { Link } from "react-router-dom";

const FeaturedFoods = ({ data }) => {
    const { foodImage, foodName, donator, foodQuantity, pickupLocation, expiredDateTime, additionalNotes, _id } = data;
    const { image, name } = donator;

    return (
        <div
            className="card card-compact shadow-xl flex flex-col h-full p-4 poppins" >
            <div className="flex-grow flex flex-col justify-between">
                <figure className="p-4 rounded-lg"><img className="w-full rounded-lg" src={foodImage} alt={foodName} /></figure>
                <div className="divider"></div>
                <div className="card-body flex flex-col justify-between p-4">
                    <div className="space-y-4">
                        <h2 className="card-title text-lg font-play-fare text-gray-500">FoodName: {foodName}</h2>
                        <div className="flex flex-row justify-around items-center gap-2">
                            <img className="w-[10%] rounded-full" src={image} alt="" />
                            <h2 className="card-title text-lg font-play-fare text-gray-500">Donator: {name}</h2>
                        </div>
                        <div className="divider"></div>
                        <p className="text-lg font-play-fare text-gray-500">FoodQuantity : {foodQuantity}</p>
                        <p className="text-lg font-play-fare text-gray-500"><span className="text-[#f5bd5a]">Pick up location : {pickupLocation}</span></p>
                        <p className="text-lg font-play-fare text-gray-500"><span>ExpiredDateTime: {expiredDateTime} </span></p>
                        <p className="text-lg font-play-fare text-gray-500"><span>Additional Note: {additionalNotes} </span></p>


                    </div>
                    <Link to={`/availableFoodDetails/${_id}`}>
                        <button className="btn bg-[#f5bd5a] w-full text-white font-poppins font-medium mt-4">View details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedFoods;

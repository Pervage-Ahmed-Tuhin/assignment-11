import Faq from 'react-faq-component';

import { Typewriter } from 'react-simple-typewriter';



const data = {
    title: "Hope You can Find Your Answer here!",
    rows: [
        {
            title: "How to Add Food Item?",
            content: "To add a new food item on DinerZZ, navigate to the 'Add Food' section and fill out the required information such as food image, food name, quantity, pickup location, expiration date, additional notes, and food status. Then submit the form to add the food item."
        },
        {
            title: "How to Request Food?",
            content: "Users can request food items by navigating to the 'Request Food' section. They can select the desired food item and provide additional information such as the request date and any specific notes. After submission, the request will be processed."
        },
        {
            title: "How to see Available Food?",
            content: "Users can view available food items on the 'Available Food' page. Here, they can browse through the list of available food items and search for specific items using the search functionality."
        },
        {
            title: "How can i Requested Food?",
            content: "Users can view their requested food items on the 'Requested Food' page. This page displays the list of food items that the user has previously requested, along with their request status and any additional notes."
        },
        {
            title: "How to Manage My food Manage My Food",
            content: "In the 'Manage My Food' section, users can manage their food items. They can update the details of existing food items, such as the food image, name, quantity, pickup location, expiration date, additional notes, and status. Additionally, users can delete food items from their list if needed."
        },
        {
            title: "How to Update and Delete?",
            content: "Users can update the details of their food items by navigating to the 'Manage My Food' section and selecting the item they wish to update. After making the necessary changes, they can submit the form to update the food item. Similarly, users can delete food items by selecting the item they want to remove and clicking on the 'Delete' button. They will be prompted to confirm the deletion before the item is permanently removed from their list."
        }]
}

const AskedQuestions = () => {
    return (
        <div className='max-w-6xl mx-auto mt-11 clear-start '>

            <h1 className="text-3xl font-play-fare font-bold text-center mt-9">


                <Typewriter
                    loop
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                    words={['Frequently Asked Questions ⁉']}
                />

            </h1>
            <div className="divider"></div>
            <p className="text-xl poppins text-gray-400 text-center mt-4 mb-5"> These are the most commonly Asked question </p>

            <div>
                <Faq data={data}
                    styles={{
                        bgColor: "base",
                        titleTextColor: "#48482a",
                        rowTitleColor: "#78789a",
                        rowContentColor: "#48484a",
                        rowTitleTextSize: 'large',
                        rowContentTextSize: '16px',
                        rowContentPaddingTop: '10px',
                        rowContentPaddingBottom: '10px',
                        rowContentPaddingLeft: '50px',
                        rowContentPaddingRight: '150px',
                        arrowColor: "black",


                    }} />
            </div>
        </div>
    );
};

export default AskedQuestions;
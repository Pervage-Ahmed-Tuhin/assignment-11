import { InfinitySpin } from "react-loader-spinner";


const Loader = () => {
    return (
        <div className='flex justify-center items-center '>

            <InfinitySpin
                visible={true}
                width="200"
                color="#f5bd5a"
                ariaLabel="infinity-spin-loading"
            />
        </div>
    );
};

export default Loader;
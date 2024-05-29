import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NavbarTwo from "../NavbarTwo/NavbarTwo";


const Root = () => {
    return (
        <div className="p-1">



            {/* <Navbar></Navbar> */}

            <NavbarTwo></NavbarTwo>


            <Outlet></Outlet>

            <Footer></Footer>

        </div>
    );
};

export default Root;
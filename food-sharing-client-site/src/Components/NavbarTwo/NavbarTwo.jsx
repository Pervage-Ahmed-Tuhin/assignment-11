import { Link, NavLink } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter';
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";

import { IoMdSunny } from "react-icons/io";
import { BsMoonStarsFill } from "react-icons/bs";
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


const Navbar = () => {

    // const [theme, setTheme] = useState("light");
    const { user, LogOutUser } = useContext(AuthContext);



    // const links = <>

    //     <li className="font-play-fare text-xl text-[#f5bd5a] font-semibold"> <NavLink to='/'>Home</NavLink></li>
    //     <li className="font-play-fare text-xl text-[#f5bd5a] font-semibold"> <NavLink to='/availableFood'>Available Foods</NavLink></li>
    //     <li className="font-play-fare text-xl text-[#f5bd5a] font-semibold"> <NavLink to='/addFood'>Add Food</NavLink></li>

    //     {user &&
    //         <li className="font-play-fare text-xl text-[#f5bd5a] font-semibold">
    //             <NavLink to='/manageMyFoods'>Manage My Foods </NavLink>
    //         </li>

    //     }

    //     <li className="font-play-fare text-xl text-[#f5bd5a] font-semibold"> <NavLink to='/MyRequest'>My Food Request</NavLink></li>


    // </>

    const handleLogout = () => {
        LogOutUser()
            .then(result => {
                console.log("Signed out Successfully", result);
            })
            .catch(error => {
                console.log(error);
            })
    }

    // useEffect(() => {
    //     localStorage.setItem('theme', theme);
    //     const localTheme = localStorage.getItem('theme');
    //     document.querySelector('html').setAttribute('data-theme', localTheme);
    // }, [theme])

    // const handleToggle = e => {
    //     if (e.target.checked) {
    //         setTheme('synthwave');
    //     }
    //     else {
    //         setTheme('light');
    //     }
    // }

    const [theme, setTheme] = useState(() => {
        const localTheme = localStorage.getItem('theme');
        return localTheme || 'light';
    });

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    const handleTheme = (e) => {


        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }

    return (
        <motion.div

            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}


            className="max-w-7xl mx-auto mb-[50px]">

            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    {/* <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>

                      
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 z-50 rounded-box w-52">
                            {links}
                            <li>


                                <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-800">
                                    <span className="text-[#f5bd5a]"><IoMdSunny /></span>
                                    <span className="relative">
                                        <input

                                            onChange={handleTheme}

                                            id="Toggle1" type="checkbox" className="hidden peer" />
                                        <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-600 peer-checked:dark:bg-[#f5bd5a]"></div>
                                        <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-100"></div>
                                    </span>
                                    <span className="text-[#f5bd5a]"><BsMoonStarsFill /></span>
                                </label>

                            </li>

                        </ul>

                    </div> */}

                    <Link to='/' className="btn btn-ghost  text-base md:text-3xl text-[#f5bd5a] bg-base-200 font-bold mr-3">

                        <div className="hidden md:block">

                            <Typewriter
                                loop
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                                words={['DinerZZ']}
                            />
                        </div>
                        <h1 className="poppins text-xs md:text-lg text-[#f5bd5a] font-semibold  block md:hidden">DineZZ</h1>

                    </Link>
                </div>
                <div className="navbar-center">
                    <ul className="menu menu-horizontal px-1 flex-col md:flex-row ">
                        <li className="poppins text-xs md:text-lg text-[#f5bd5a] font-semibold"> <NavLink to='/'>Home</NavLink></li>
                        <li className="poppins text-xs md:text-lg text-[#f5bd5a] font-semibold"> <NavLink to='/availableFood'>Available Foods</NavLink></li>
                        <li className="font-play-fare text-xs md:text-lg text-[#f5bd5a] font-semibold"> <NavLink to='/addFood'>Add Food</NavLink></li>

                        {user &&
                            <li className="poppins text-xs md:text-lg text-[#f5bd5a] font-semibold">
                                <NavLink to='/manageMyFoods'>Manage My Foods </NavLink>
                            </li>

                        }

                        <li className="poppins text-xs md:text-lg text-[#f5bd5a] font-semibold"> <NavLink to='/MyRequest'>My Food Request</NavLink></li>
                        
                    </ul>

                </div>



                <div className="ml-0 md:ml-3 hidden md:block">
                    <label htmlFor="Toggle2" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-800">
                        <span className="text-sm md:text-2xl text-[#f5bd5a]"><IoMdSunny /></span>
                        <span className="relative">
                            <input
                                onChange={handleTheme}
                                id="Toggle2"
                                type="checkbox"
                                className="hidden peer" />
                            <div className="w-10 h-4 rounded-full shadow dark:bg-gray-400 peer-checked:dark:bg-gray-400"></div>
                            <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto dark:bg-[#f5bd5a]"></div>
                        </span>
                        <span className="text-sm md:text-2xl text-[#f5bd5a]"><BsMoonStarsFill /></span>
                    </label>
                </div>

                <div className="navbar-end">





                    {user ? (
                        <div className="flex  items-center gap-2">
                            <img
                                title={user.displayName}
                                className="rounded-full w-[20%] ml-3"
                                src={user.photoURL}

                                alt="You"
                            />
                            <button onClick={handleLogout} className="btn bg-[#f5bd5a] text-white btn-sm md:btn-md text-sm  md:text-lg ">
                                LogOut
                            </button>
                        </div>
                    ) : (
                        <div>
                            <Link to="/login">
                                <button className="btn bg-[#f5bd5a] text-white sm:btn-sm md:btn-md">LogIn....</button>
                            </Link>
                            <Link to="/register">
                                <button className="btn bg-[#f5bd5a] text-white sm:btn-sm md:btn-md">Register</button>
                            </Link>
                        </div>
                    )}


                </div>
            </div>

        </motion.div>
    );
};

export default Navbar;
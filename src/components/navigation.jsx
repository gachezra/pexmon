import { useState } from "react";
//import { Link } from "react-router-dom"; 
import { ReactComponent as IconMenu } from "../assets/images/icon-menu.svg";
import { ReactComponent as IconClose } from "../assets/images/icon-close-menu.svg";
import { ReactComponent as ArrowUp } from "../assets/images/icon-arrow-up.svg";
import { ReactComponent as ArrowDown } from "../assets/images/icon-arrow-down.svg";
import { ReactComponent as IconKadi } from "../assets/images/niko-kadi.svg";
import { ReactComponent as IconCalendar } from "../assets/images/icon-calendar.svg";
import { ReactComponent as IconMyfit } from "../assets/images/myfit.svg";
import LogoImg from "../assets/images/logo.png";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false); // Separate state for the first dropdown
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false); // Separate state for the second dropdown

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleDropdown1 = () => {
        setIsDropdownOpen1(!isDropdownOpen1);
    };
    
    // const toggleDropdown2 = () => {
    //     setIsDropdownOpen2(!isDropdownOpen2);
    // };

    const handleOverlayClick = () => {
        setIsOpen(false); // Close the sidebar when overlay is clicked
    };

    const handleMouseLeave = () => {
        setIsDropdownOpen1(isDropdownOpen1);
        setIsDropdownOpen2(isDropdownOpen2); // Close the sidebar when overlay is clicked
    };

    const sideBar = `flex flex-col absolute top-0 -right-2/3 w-2/3 h-screen px-5 overflow-y-auto transition-transform ease-in-out -translate-x-full bg-[hsl(0,0%,98%)]`

    return(
        <div>
            <div className='flex justify-between lg:items-center px-5 py-6 lg:px-14'>
            <a href="" className="lg:mr-16 display-flex">
                <div className="flex items-center">
                <img src={LogoImg} alt="Pexmon Logo" style={{ height: 40 }} />
                <span className="fw-bold ml-2">Pexmon</span>
                </div>
            </a>
                <div className="hidden lg:flex lg:grow text-[hsl(0,0%,41%)] lg:items-center justify-end">
                    <div className="text-lg relative flex justify-end mr-6">
                        <div onMouseEnter={toggleDropdown1} onMouseLeave={handleMouseLeave} className="flex items-center hover:text-[hsl(0,0%,8%)]">
                            <span className="mr-2 cursor-pointer">Projects</span>
                            <span className="pointer-events-none">{isDropdownOpen1 ? <ArrowUp/> : <ArrowDown/>}</span>
                        </div>
                        {isDropdownOpen1 && (
                            <ul className="absolute bg-white top-10 p-5 rounded-lg text-base drop-shadow-2xl">
                                <li className="flex items-center mb-2"><span className="mr-4"><IconKadi/></span><a href="" className="whitespace-nowrap">Niko Kadi</a></li>
                                <li className="flex items-center mb-2"><span className="mr-4"><IconCalendar/></span><a href="https://eventkick.ke/">EventKick</a></li>
                                <li className="flex items-center mb-2"><span className="mr-4"><IconMyfit/></span><a href="">MyFit</a></li>
                            </ul>
                        )}
                    </div>
                    {/* <div className="text-[hsl(0,0%,41%)] text-lg relative flex justify-start mr-6">
                        <div onMouseEnter={toggleDropdown2} onMouseLeave={handleMouseLeave} className="flex items-center hover:text-[hsl(0,0%,8%)]">
                            <span className="mr-2 cursor-pointer">Company</span>
                            <span className="pointer-events-none">{isDropdownOpen2 ? <ArrowUp/> : <ArrowDown/>}</span>
                        </div>
                        {isDropdownOpen2 && (
                            <ul className="absolute bg-white top-10 p-5 rounded-lg text-base drop-shadow-2xl">
                                <li className="mr-6"><a href="" className="hover:text-[hsl(0,0%,8%)]">About</a></li>
                            </ul>
                        )}
                    </div> */}
                </div>
                {/* desktop menu end */}

                {/* mobile menu */}
                <div className="flex lg:hidden">
                    <div>
                        {isOpen && (
                            // Overlay
                            <div onClick={handleOverlayClick} className="fixed top-0 left-0 w-full h-screen bg-black opacity-60"></div>
                        )}
                    </div>
                    <button type="button" onClick={toggleSidebar} className=" relative z-10">
                        {!isOpen ?  <IconMenu/> : <IconClose/> }
                    </button>
                    <div className={`${sideBar} ${!isOpen ? ' -left-1/3 pointer-events-none' : ''}`}>
                        <div className="text-[hsl(0,0%,41%)] mt-20 text-lg">
                            <div onClick={toggleDropdown1} className="flex items-center">
                                <span className="mr-3">Projects</span>
                                <span>{isDropdownOpen1 ? <ArrowUp/> : <ArrowDown/>}</span>
                            </div>
                            {isDropdownOpen1 && (
                                <ul className="p-5 text-lg">
                                    <li className="flex items-center mb-3"><span className="mr-4"><IconKadi/></span><a href="" className="whitespace-nowrap">Niko Kadi</a></li>
                                    <li className="flex items-center mb-3"><span className="mr-4"><IconCalendar/></span><a href="https://eventkick.ke/">EventKick</a></li>
                                    <li className="flex items-center mb-3"><span className="mr-4"><IconMyfit/></span><a href="">MyFit</a></li>
                                </ul>
                            )}
                        </div>

                        {/* <div className="text-[hsl(0,0%,41%)] mt-3 text-lg">
                            <div onClick={toggleDropdown2} className="flex items-center">
                                <span className="mr-3">Company</span>
                                <span>{isDropdownOpen2 ? <ArrowUp/> : <ArrowDown/>}</span>
                            </div>
                            {isDropdownOpen2 && (
                                <ul className="p-5 text-lg">
                                    <li className="mb-10"><a href="">About</a></li>
                                </ul>
                            )}
                        </div> */}
                    </div>
                </div>
                
            </div>
        </div>
    )
}
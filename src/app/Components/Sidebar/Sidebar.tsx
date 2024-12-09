'use client'

// react icons
import { IoIosArrowDown } from "react-icons/io";
import { FiBarChart, FiPieChart } from "react-icons/fi";
import { GoProjectSymlink, GoSidebarCollapse } from "react-icons/go";
import { useState } from "react";
import { PiFolder } from "react-icons/pi";
import { TbShoppingBagCheck } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(true)


    return (
        <div className="">

            <div className="relative ">
                {/* Toggle Button */}
                <button
                    className="text-3xl ml-3 absolute lg:hidden"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <GoSidebarCollapse />
                </button>

                <div
                    className={`w-[300px] ${isOpen ? "flex absolute z-20" : "hidden"
                        } lg:flex flex-col items-center py-10 rounded-3xl bg-white justify-between h-screen`}
                >
                    <div className="">
                        <div className="flex justify-between items-center space-x-3">
                            <h1 className="uppercase font-bold text-5xl">genpos</h1>
                            <BiArrowFromRight className="text-[1.5rem] lg:hidden  text-gray-600 cursor-pointer"
                                onClick={() => setIsOpen(!isOpen)} />
                        </div>
                        {/* general section */}
                        <div className={`mt-6  : "px-[10px]"} transition-all duration-300 ease-in-out`}>

                            <div className="mt-3 flex flex-col gap-[5px]">
                                <div
                                    className={` flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                    <div className="flex items-center gap-[8px]">
                                        <TbShoppingBagCheck className="text-[1.3rem] text-gray-500" />
                                        <p className={` text-[1rem] font-[400] text-gray-500`}>Dashboard</p>
                                    </div>
                                </div>
                                <div
                                    className={` flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                    <div className="flex items-center gap-[8px]">
                                        <TbShoppingBagCheck className="text-[1.3rem] text-gray-500" />
                                        <p className={` text-[1rem] font-[400] text-gray-500`}>Purchase</p>
                                    </div>
                                </div>
                                <div
                                    className={` ${isDropdownOpen && "bg-gray-50"}  flex w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group flex-col`}
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                    <div
                                        className={`flex items-center gap-[8px]  w-full`}>
                                        <div className="flex items-center gap-[8px]">
                                            <GoProjectSymlink className="text-[1.3rem] text-gray-500" />
                                            <p className={`text-[1rem] font-[400] text-gray-500`}>Bussiness Unit</p>
                                        </div>

                                        <IoIosArrowDown
                                            className={`${isDropdownOpen ? "rotate-[180deg]" : "rotate-0"}  inline transition-all duration-300 text-[1rem] text-gray-500`} />
                                    </div>
                                </div>

                                {/* active projects dropdown */}
                                <ul className={`${isDropdownOpen ? "h-auto my-3 opacity-100 z-[1]" : "opacity-0 z-[-1] h-0"}  transition-all duration-300 list-disc marker:text-blue-400 ml-[35px] flex flex-col gap-[3px] text-[1rem] text-gray-500`}>
                                    <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">Goups</li>
                                    <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">Companies</li>
                                    <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">Brands</li>
                                    <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">Outlets</li>
                                    <li className="hover:bg-gray-50 px-[10px] py-[5px] rounded-md">Warehouses</li>
                                </ul>


                                <div
                                    className={` flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                    <div className="flex items-center gap-[8px]">
                                        <FiBarChart className="text-[1.3rem] text-gray-500" />
                                        <p className={` text-[1rem] font-[400] text-gray-500`}>Catelog</p>
                                    </div>


                                </div>
                                <div
                                    className={` flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                    <div className="flex items-center gap-[8px]">
                                        <FiPieChart className="text-[1.3rem] text-gray-500" />
                                        <p className={` text-[1rem] font-[400] text-gray-500`}>User</p>
                                    </div>


                                </div>
                                <div
                                    className={` flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                    <div className="flex items-center gap-[8px]">
                                        <FiPieChart className="text-[1.3rem] text-gray-500" />
                                        <p className={` text-[1rem] font-[400] text-gray-500`}>Configuration</p>
                                    </div>


                                </div>
                                <div
                                    className={` flex items-center w-full hover:bg-gray-50 p-[5px] rounded-md cursor-pointer transition-all duration-200 relative group`}>
                                    <div className="flex items-center gap-[8px]">
                                        <FiPieChart className="text-[1.3rem] text-gray-500" />
                                        <p className={` text-[1rem] font-[400] text-gray-500`}>System</p>
                                    </div>


                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;



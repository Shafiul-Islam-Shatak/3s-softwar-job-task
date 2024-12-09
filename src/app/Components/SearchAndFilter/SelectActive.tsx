'use client'
// icons
import { IoChevronDown } from "react-icons/io5";
import { IoMdFootball } from "react-icons/io";
import { MdOutlineSportsTennis, MdOutlineSportsCricket } from "react-icons/md";
import { GiTennisRacket } from "react-icons/gi";
import { useState } from "react";
const SelectActive = () => {



    // actions
    const [isActive, setIsActive] = useState<boolean>(false);
    const [content, setContent] = useState<string>("Select Option");
    const optionArray = [
        {
            icon: <IoMdFootball />,
            title: "Football",
        },
        {
            icon: <MdOutlineSportsCricket />,
            title: "Cricket",
        },
        {
            icon: <MdOutlineSportsTennis />,
            title: "Tennis",
        },
        {
            icon: <GiTennisRacket />,
            title: "Badminton",
        },
    ];
    return (
        <div>
            <h1 className="mb-2">Active</h1>
            <button
                className=" border border-gray-200 rounded-md w-full justify-between px-3 py-2 flex items-center gap-8  relative cursor-pointer dropdown"
                onClick={() => setIsActive(!isActive)}
            >
                {content}
               
                <IoChevronDown
                    className={`${isActive ? " rotate-[180deg]" : " rotate-0"
                        } transition-all duration-300 text-[1.2rem]  `}
                />
                <div
                    className={`${isActive ? " opacity-100 scale-[1]" : " hidden"
                        } w-full absolute top-12 left-0 right-0 z-40 bg-[#fff] rounded-xl flex flex-col  overflow-hidden transition-all duration-300 ease-in-out`}
                    style={{
                        boxShadow: "0 15px 60px -15px rgba(0, 0, 0, 0.3)",
                    }}
                >
                    {optionArray?.map((option, index) => (
                        <p
                            className="py-2 px-4 hover:bg-[#ececec] transition-all duration-200 flex items-center gap-2"
                            key={index}
                            onClick={(e) => setContent(option.title)}
                        >
                            {option.icon}
                            {option.title}
                        </p>
                    ))}
                </div>
            </button>
        </div>
    );
};

export default SelectActive;
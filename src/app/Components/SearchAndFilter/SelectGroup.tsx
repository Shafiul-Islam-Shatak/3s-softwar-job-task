'use client'
// icons
import { IoChevronDown } from "react-icons/io5";
import React, { useState } from "react";
import useCompanyData from "@/app/CustomHooks/useCompanyData";

interface Group{
    text:string;
}

interface SelectedGroupProps{
    setSelecedGroup :(value:string)=>void;
    selectedGroup: string
}

const SelectGroup : React.FC<SelectedGroupProps> = ({ setSelecedGroup , selectedGroup}) => {

    const {data}= useCompanyData()
    const groups:Group[]= data?.data.availableGroups;

  
    const [isActive, setIsActive] = useState<boolean>(false); //for dropdown
    


    return (
        <div>
            <h1 className="mb-2">Group</h1>
            <button
                className=" border border-red-700-200 rounded-md w-full justify-between px-3 py-2 flex items-center gap-8  relative cursor-pointer dropdown"
                onClick={() => setIsActive(!isActive)}
            >
                {selectedGroup}
               
                <IoChevronDown
                    className={`${isActive ? " rotate-[180deg]" : " rotate-0"
                        } transition-all duration-300 text-[1.2rem]  `}
                />
                <div
                    className={`${isActive ? " opacity-100 scale-[1]" : "hidden"
                        } w-full absolute top-12 left-0 right-0 z-40 bg-[#fff] rounded-xl flex flex-col  overflow-hidden transition-all duration-300 ease-in-out`}
                    style={{
                        boxShadow: "0 15px 60px -15px rgba(0, 0, 0, 0.3)",
                    }}
                >
                    {groups?.map((group, index:number) => (
                        <p
                            className="py-2 px-4 hover:bg-[#ececec] transition-all duration-200 flex items-center gap-2"
                            key={index}
                            onClick={(e) => setSelecedGroup(group.text)}
                        >
                            {group.text}
                        </p>
                    ))}
                </div>
            </button>
        </div>
    );
};

export default SelectGroup;
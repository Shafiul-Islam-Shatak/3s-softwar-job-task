import { FaMessage } from "react-icons/fa6";
import { TbBellRingingFilled } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";


const Toolbar = () => {
    return (
        <div className="flex items-center space-x-5">
            <div className="bg-gray-100 drop-shadow-md w-10 h-10 rounded-lg flex items-center justify-center relative">
                <FaMessage className="text-lg" />
                <div className="absolute z-20 text-green-400 top-1 right-1">
                    <GoDotFill />
                </div>
            </div>
            <div className="bg-gray-100 drop-shadow-md w-10 h-10 rounded-lg flex items-center justify-center relative">
                <TbBellRingingFilled className="text-lg" />
                <div className="absolute z-20 text-yellow-400 top-1 right-1">
                    <GoDotFill />
                </div>
            </div>
            <div className="bg-gray-100 drop-shadow-md w-10 h-10 rounded-lg flex items-center justify-center relative">
                <IoSettingsOutline className="text-lg" />
            </div>

            <div className="bg-orange-400 rounded-full flex items-center justify-center h-12 w-12">
                <h1 className="uppercase font-semibold">a</h1>
            </div>
        </div>
    );
};

export default Toolbar;
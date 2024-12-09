
// react icons
import { IoIosSearch} from "react-icons/io";

import { ImCommand } from "react-icons/im";


const SearchBar = () => {

    return (
        <div className="relative w-[400px]   product_search_input">
            <input className="px-4 py-2 border border-border rounded-md w-full pl-[40px] outline-none"
                   placeholder="Search your page..." />
            <IoIosSearch className="absolute top-[9px] left-2 text-[1.5rem] "/>

            {/* shortcut hint */}
            <div
                className="absolute top-[5px] right-1.5 text-[0.6rem] font-bold border border-gray-100 p-[8px] bg-blue-400 rounded-md text-white">
                <div className="flex items-center space-x-1">
                    <ImCommand className="text-lg"/>
                    <h1>K</h1>
                </div>
            </div>

            
        </div>
    );
};

export default SearchBar;
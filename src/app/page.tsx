'use client'
import Sidebar from "./Components/Sidebar/Sidebar";
import SearchBar from "./Components/SearchBar/SearchBar";
import Toolbar from "./Components/Toolbar/Toolbar";
import SearchAndFilter from "./Components/SearchAndFilter/SearchAndFilter";
import useCompanyData from "./CustomHooks/useCompanyData";
import { MoonLoader } from "react-spinners";
import { FaPlus } from "react-icons/fa6";


export default function Home() {

  const { isLoading } = useCompanyData()


  if (isLoading) {
    return <div className="flex items-center justify-center h-screen ">
      <MoonLoader color="#000000" />
    </div>
  }


  return (
    <div>
      <div className="flex space-x-5">
        {/* sidebar */}
        <div className=""><Sidebar /></div>

        {/* main dashboard */}
        <div className=" flex-1 lg:border-l px-5 relative">

          {/* top section */}
          <div className=" bg-white py-10 z-10 mt-5 sticky top-0 left-4 right-4 flex flex-col-reverse gap-4 md:flex-row items-center justify-between">
            <div className=""><SearchBar /></div>
            <div className=""><Toolbar /></div>
          </div>

          {/* list of company */}
          <div className="">
            <div className="  flex justify-between ">
              <h1 className="font-semibold text-3xl">List of Company</h1>
              <button className="bg-blue-500 h-fit text-white text-lg px-4 py-1 rounded-lg font-semibold flex items-center justify-center"><FaPlus></FaPlus> <h1>Add New</h1></button>
            </div>

            {/*Search and filter */}
            <div>
              <SearchAndFilter />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

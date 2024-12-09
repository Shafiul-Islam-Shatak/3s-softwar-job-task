import Sidebar from "./Components/Sidebar/Sidebar";
import SearchBar from "./Components/SearchBar/SearchBar";
import Toolbar from "./Components/Toolbar/Toolbar";
import SearchAndFilter from "./Components/SearchAndFilter/SearchAndFilter";
import CompanyListTable from "./Components/CompanyListTable/CompanyListTable";

export default function Home() {
  return (
    <div>
      <div className="flex space-x-5">
        {/* sidebar */}
        <div className=""><Sidebar /></div>

        {/* main dashboard */}
        <div className=" flex-1 lg:border-l px-5 relative">

          {/* top section */}
          <div className="lg:mt-10 bg-white py-10 z-10 mt-5 sticky top-0 left-4 right-4 flex flex-col-reverse gap-4 md:flex-row items-center justify-between">
            <div className=""><SearchBar /></div>
            <div className=""><Toolbar /></div>
          </div>

          {/* list of company */}
          <div className=" overflow-y-auto">
            <div className="lg:mt-28 mt-36 flex justify-between overflow-auto">
              <h1 className="font-semibold text-3xl">List of Company</h1>
              <button className="bg-blue-500 text-white text-lg px-4 py-1 rounded-lg font-semibold"><span className="text-2xl">+</span> Add New</button>
            </div>
            {/*Search and filter */}
            <div>
              <SearchAndFilter />
            </div>

            {/* tabele */}
            <CompanyListTable />
          </div>
        </div>
      </div>
    </div>
  );
}

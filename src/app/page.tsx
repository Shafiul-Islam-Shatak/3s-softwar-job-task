'use client'
import Sidebar from "./Components/Sidebar/Sidebar";
import SearchBar from "./Components/SearchBar/SearchBar";
import Toolbar from "./Components/Toolbar/Toolbar";
import SearchAndFilter from "./Components/SearchAndFilter/SearchAndFilter";
import CompanyListTable from "./Components/CompanyListTable/CompanyListTable";
import axios from "axios";



export default function Home() {
  const token = process.env.NEXT_PUBLIC_TOKEN;
  console.log(token);
  

  const fetchData = async () => {
    try {
      const response = await axios.get('http://103.129.115.165:5000/api/Company/List', {
        headers: {
          'Authorization': `Bearer ${token}` ,

          'accept': '*/*'
        }
      });
  
      console.log(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  
  fetchData();
  
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
          <div className=" overflow-y-auto">
            <div className="  flex justify-between overflow-auto">
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

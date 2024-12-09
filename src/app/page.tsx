import Image from "next/image";
import Sidebar from "./Components/Sidebar/Sidebar";
import SearchBar from "./Components/SearchBar/SearchBar";
import Toolbar from "./Components/Toolbar/Toolbar";

export default function Home() {
  return (
    <div>
      <div className="flex space-x-5">
        {/* sidebar */}
        <div className="border border-red-500"><Sidebar /></div>

        {/* main dashboard */}
        <div className="border border-green-500 flex-1">

          {/* top section */}
          <div className="mt-10 flex items-center justify-between">
            <div className=""><SearchBar/></div>
            <div className=""><Toolbar/></div>
          </div>

        </div>
      </div>
    </div>
  );
}

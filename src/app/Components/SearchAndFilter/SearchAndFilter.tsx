import { useMemo, useState } from "react";
import CompanyName from "./SearchByCompanyName";
import SearchByVatNumber from "./SearchByVatNumber";
import SelectActive from "./SelectActive";
import SelectGroup from "./SelectGroup";
import { IoIosSearch, IoMdTrash } from "react-icons/io";
import useCompanyData from "@/app/CustomHooks/useCompanyData";
import useCompanyTableData from "@/app/CustomHooks/useCompanyTableData";
import CompanyListTable from "../CompanyListTable/CompanyListTable";
import { log } from "console";

const SearchAndFilter = () => {
    const { data: table } = useCompanyTableData()

    const [active, setActive] = useState<string>('All');
    const [selectedGroup, setSelecedGroup] = useState<string>('All');
    const [serchCompanyName, setSerchCompanyName] = useState<string>('');
    const [serchVatNumber, setSerchVatNumber] = useState<string>('');

    const tableData = table?.data.data || []
    console.log('all data', tableData);

    const filteredTableData = useMemo(() => {
        return tableData.filter((item:any) => {
            const matchesGroup =
                selectedGroup === "All" || item.groupName === selectedGroup;
            const matchesCompanyName =
                serchCompanyName === "" ||
                item.name.toLowerCase().includes(serchCompanyName.toLowerCase());
            const matchesVatNumber =
                serchVatNumber === "" ||
                item.vatNumber.toLowerCase().includes(serchVatNumber.toLowerCase());
            return matchesGroup && matchesCompanyName && matchesVatNumber;
        });
    }, [tableData, selectedGroup, serchCompanyName, serchVatNumber]);

console.log('filterdata' , filteredTableData);


    const handleClear = () => {
        setActive('All');
        setSelecedGroup('All');
        setSerchCompanyName('');
        setSerchVatNumber('');
    };



    return (
        <div>
            <div className="border border-gray-300 rounded-md mt-5 p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    <CompanyName
                        searchCompanyName={serchCompanyName}
                        setSearchCompanyName={setSerchCompanyName} />

                    <SelectGroup
                        setSelecedGroup={setSelecedGroup}
                        selectedGroup={selectedGroup} />

                    <SearchByVatNumber
                        serchVatNumber={serchVatNumber}
                        setSerchVatNumber={setSerchVatNumber} />

                    <SelectActive
                        setActive={setActive}
                        active={active} />
                </div>
                <div className="flex items-center justify-center mt-5 lg:mt-10 space-x-2">
                    <button className=" bg-blue-500 flex items-center justify-center px-4 py-1 rounded-md space-x-1 text-white">
                        <IoIosSearch />
                        <h1>Search</h1>
                    </button>
                    <button
                        onClick={handleClear}
                        className=" bg-gray-300 flex items-center justify-center px-4 py-1 rounded-md space-x-1">
                        <IoMdTrash />
                        <h1>Clear</h1>
                    </button>
                </div>
            </div>

            {/* tabele */}
            <CompanyListTable tableData={filteredTableData} />
        </div>
    );
};

export default SearchAndFilter;
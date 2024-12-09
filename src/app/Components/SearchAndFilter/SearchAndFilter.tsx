import { useState } from "react";
import CompanyName from "./SearchByCompanyName";
import SearchByVatNumber from "./SearchByVatNumber";
import SelectActive from "./SelectActive";
import SelectGroup from "./SelectGroup";
import { IoIosSearch } from "react-icons/io";
import { IoMdTrash } from "react-icons/io";
import useCompanyData from "@/app/CustomHooks/useCompanyData";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const SearchAndFilter = () => {
    const { data } = useCompanyData()
    const [active, setActive] = useState<string>('All');
    const [selectedGroup, setSelecedGroup] = useState<string>('All');
    const [serchCompanyName, setSerchCompanyName] = useState<string>('');
    const [serchVatNumber, setSerchVatNumber] = useState<string>('');

    const { data: filterdData} = useQuery({
        queryKey: ['filterdData'],
        queryFn: async () => {
            const res = await axios.post("http://103.129.115.165:5000/api/Company/List",{},
                {
                    headers:
                    {
                        'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImFkbWluIiwiQWRtaW5BY2Nlc3MiOnRydWUsImFwcF9tZXRhZGF0YSI6IiIsImV4cCI6MTczNjE4NjQ1NCwiaXNzIjoiR2VuUE9TIn0.f1n7YRDDrnJQ_iy9zSLBp9wgBU2FnIdpPgome7a6Xcc`,
                        'Accept': '*/*',
                    }
            
                }); 
                return res.data
        }
    })

    console.log(filterdData);
    console.log(process.env.NEXT_POST_TOKEN);
    



    return (
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
                    className=" bg-gray-300 flex items-center justify-center px-4 py-1 rounded-md space-x-1">
                    <IoMdTrash />
                    <h1>Clear</h1>
                </button>
            </div>
        </div>
    );
};

export default SearchAndFilter;
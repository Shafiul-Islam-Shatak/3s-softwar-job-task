import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchData = async () => {
    const res = await axios.get("http://103.129.115.165:5000/api/Company/List", {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`, 
            Accept: "*/*",
        },
    })
    return res.data
}

const useCompanyData = () => {
    return useQuery({
        queryKey:['companyData'],
        queryFn:fetchData
    })
}

export default useCompanyData
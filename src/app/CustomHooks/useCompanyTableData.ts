import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const fetchData = async() => {
    const res = await axios.post("http://103.129.115.165:5000/api/Company/List", {},
        {
            headers:
            {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_POST_TOKEN}`,
                'Accept': '*/*',
            }

        });
    return res.data
}

const useCompanyTableData=()=>{
    return useQuery({
        queryKey:['filterdData'],
        queryFn:fetchData
    })
}

export default useCompanyTableData;
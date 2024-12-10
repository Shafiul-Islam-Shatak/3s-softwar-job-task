import React from "react";
import CompanyListTableRow from "./CompanyListTableRow";
import Pagination from "../Pagination/Pagination";

interface TableDataProps {
    tableData: Data;
}

interface Data {
    map(arg0: (row: any, idx: number) => React.JSX.Element): React.ReactNode;
    data: Row[];
}

interface Row {
    logoThumbnailUrl: string
    name: string
    groupName: string
    vatNumber: string
    active: boolean
}

const CompanyListTable: React.FC<TableDataProps> = ({ tableData }) => {
    console.log(tableData);
    

    return (
        <div className="">
            <div className="mt-5 border rounded-md">
                <table className="table ">
                    {/* head */}
                    <thead className="bg-gray-100 ">
                        <tr className="uppercase">
                            <th>Logo</th>
                            <th>Name</th>
                            <th>Group</th>
                            <th>VAT Number</th>
                            <th>Active</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {tableData?.map((row:any, idx:number) => (
                            <CompanyListTableRow key={idx} row={row} />
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination/>
        </div>
    );
};

export default CompanyListTable;

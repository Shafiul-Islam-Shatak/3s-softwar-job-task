import React from "react";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";
import { CiTrash , CiEdit} from "react-icons/ci";


interface TableRowProps {
    row: RowData
}

interface RowData {
    logoThumbnailUrl: string
    name: string
    groupName: string
    vatNumber: string
    active: boolean
}



const CompanyListTableRow: React.FC<TableRowProps> = ({ row }) => {


    console.log(row);



    return (
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <img src={row.logoThumbnailUrl} alt="logo" />
                    </div>
                </div>
            </td>
            <td>{row.name}</td>
            <td>{row.groupName}</td>
            <td>{row.vatNumber}</td>
            <td>
                {row.active === true ?
                    <FaCheck className="text-green-700 text-lg " /> :
                    <RxCross2  className="text-red-700 text-lg "/>}
            </td>
            <td>
                <div className="flex items-center space-x-2">
                    <div className="border border-gray-200 p-1 rounded-md"><CiEdit className="text-xl"/></div>
                    <div className="border border-gray-200 p-1 rounded-md"><CiTrash className="text-xl"/></div>
                </div>
            </td>

        </tr>

    );
};


export default CompanyListTableRow;
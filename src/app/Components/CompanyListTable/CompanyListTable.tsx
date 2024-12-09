import CompanyListTableRow from "./CompanyListTableRow";


const CompanyListTable = () => {

    return (
        <div className="">
         
            <div className="mt-5 overflow-hidden border rounded-md">
                <table className="table  border-collapse">
                    {/* head */}
                    <thead className="bg-gray-100 ">
                        <tr className="uppercase" >
                            <th>Logo</th>
                            <th>Name</th>
                            <th>Group</th>
                            <th>VAT Number</th>
                            <th>Active</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                     <CompanyListTableRow/>
                     <CompanyListTableRow/>
                     <CompanyListTableRow/>
                     <CompanyListTableRow/>
                     <CompanyListTableRow/>
                     <CompanyListTableRow/>
                  
                    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompanyListTable;
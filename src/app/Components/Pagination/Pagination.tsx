import useCompanyData from "@/app/CustomHooks/useCompanyData";
import useCompanyTableData from "@/app/CustomHooks/useCompanyTableData";
import React, { useState } from "react";

// react icons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination: React.FC = () => {
    const { data } = useCompanyData();
    const { data: tableData } = useCompanyTableData()
    const [pageSize, setPageSize]= useState(data?.data.pageSize)

    const totalData = tableData?.data.recordsFiltered
    const pageCount = Math.ceil(totalData / pageSize)



    const totalPageNumber = pageCount;

    const [paginationNum, setPaginationNum] = useState(pageSize);

    const updatePageNumber = (num: number) => {
        if (num > totalPageNumber - 1 || 0 > num) {
            return setPaginationNum(0);
        }
        setPaginationNum(num);
    };

    const [currentPage, setCurrentPage] = useState(data.data.page);
    const totalPages = pageCount;

    const handlePageSizeChange=(e: { target: { value: string; }; })=>{
        setPageSize(Number(e.target.value))
        setCurrentPage(1)
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={`mx-1 px-3 py-1 rounded-md transform transition-all duration-300 ${currentPage === i
                        ? "bg-[#3B9DF8] text-white scale-110 shadow-md"
                        : "bg-transparent text-blue-600 hover:bg-blue-100"
                        }`}
                >
                    {i}
                </button>
            );
        }

        return pageNumbers;
    };

    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <h1>Rows Per Page : </h1>
                <div>
                    <select 
                    value={pageSize}
                    onChange={handlePageSizeChange}
                    className="bg-gray-100 rounded-md drop-shadow-sm p-1">
                        <option value="15">15</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
            </div>
            <div>
                <div className="flex items-center justify-center mt-8 space-x-2">
                    <button
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                        className="mx-1 px-3.5 py-3.5 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                        <FaChevronLeft />
                    </button>
                    {renderPageNumbers()}
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className="mx-1 px-3.5 py-3.5 rounded-full bg-white text-blue-600 hover:bg-blue-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pagination;

//Dependencies
import { useState } from "react";

function usePagination(data, itemsPerPage) {
    //States
    const [currentPage, setCurrentPage] = useState(1);
    //Calculate maximum page
    const maxPage = Math.ceil(data.length / itemsPerPage);
    //Define items in current batch/page
    function currentData() {
        const begin = (currentPage - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return data.slice(begin, end);
    }
    //Jump to next page
    function next() {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
    }
    //Jump to previous page
    function prev() {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
    }
    //Jump to a given page
    function jump(page) {
        const pageNumber = Math.max(1, page);
        setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
    }

    return [next, prev, jump, currentData, currentPage, maxPage, setCurrentPage];
}

export default usePagination;
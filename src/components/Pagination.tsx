"use client";
import React from "react";

type Props = {
    setPage: (value:number) => void;
    currentPage:number;
    totalPages: number;
}

export default function Pagination({ setPage, currentPage, totalPages } : Props) {
    
    const pages: number[] = (() => {
        if (totalPages <= 5) return Array.from({ length: totalPages }, (v, i) => i + 1);
        
        let arr:number[]  = [currentPage];
        let index:number = 0;
        let counter:number = 0;

        while(index < 4){
            counter++; //counter used only for add elements to the end and beginning squentially 
            //if the last element  + 1 less than the total pages, then push new element at the end of the array
            if(arr[index] + 1 < totalPages && counter % 2 == 0){
                arr.push(arr[index] + 1);
                index++;
            }
            // if the first element of array - one is more than 0, then add it to the beginning
            else if (arr[0] - 1 > 0){
                arr.unshift(arr[0] - 1)
                index++;
            }
        }
        return arr;
    })();

    const pageChangeHandler = (page: number): void => setPage(page > 0 && page <= totalPages ? page : currentPage);
        
    return (
        <nav className="pavigation m-4">
            <ul className="pagination justify-content-center gap-2">
                <li className="page-item">
                    <button
                        disabled={currentPage === 1}
                        className={`page-link bg-transparent border-0 rounded ${currentPage === 1 ? "disabled text-silver": "text-black"}`}
                        onClick={() => pageChangeHandler(currentPage - 1)}
                        type={'button'}
                        aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                {pages.map(item => {
                    return (
                        <button
                        type="button"
                        className={`page-link text-black border-0 ${item === currentPage ? "active-link" : 'bg-transparent'}`}
                            onClick={() => pageChangeHandler(item)}
                            key={item}
                        >
                            {item}
                        </button>
                    )
                })}
                <li className="page-item">
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => pageChangeHandler(currentPage + 1)}
                        className={`page-link bg-transparent  rounded border-0 ${currentPage === totalPages? "disabled text-silver": "text-black"}`}
                        type={'button'}
                        aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    )
}
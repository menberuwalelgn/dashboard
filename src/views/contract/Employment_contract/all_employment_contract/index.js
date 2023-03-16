import React, { useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import BaseUrl from "../../../../utils/base_url";
import { employmentLetter } from "../../../../actions/letterAction";

const AllEmploymentContract = (props) => {
  // dispatch
  const dispatch = useDispatch();
  // hooks
  const letter = useSelector(
    (state) => state.letter
  );
  
  console.log(letter);

  // use effect
  useEffect(() => {
    dispatch(employmentLetter());
  }, []);
    return(
    <>
 <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    
<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="p-4">
                <div class="flex items-center">
                    <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                </div>
            </th>
            <th scope="col" class="px-6 py-3">
                Letter Type
            </th>
            <th scope="col" class="px-6 py-3">
                 Letter File
            </th>
            <th scope="col" class="px-6 py-3">
               Created Date
            </th>
        </tr>
    </thead>
    <tbody>
    {
        (letter.letter.letters?.length)>0
          ?(
            letter.letter.letters?.map((letter, index) => (      
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
                <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                </div>
            </td>
            <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                {/* <img class="w-10 h-10 rounded-full" src={`${BaseUrl}/images/${letters.image}`} alt="blog image"/> */}
                <div class="pl-3">
                    <div class="text-base font-semibold">{letter.letterType}</div>
                </div>  
            </th>
            <td class="px-6 py-4">
                 {letter.letterFile}
            </td>
            <td class="px-6 py-4">
            {letter.createdAt}
            </td>
            
        </tr>
        ) ))
    :(<div>Search Letter </div>)  
}
    </tbody>
</table>
</div>
    </>
    )
}
export default AllEmploymentContract;
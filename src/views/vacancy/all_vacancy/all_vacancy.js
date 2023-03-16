import React, { useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import BaseUrl from "../../../utils/base_url";
import {viewVacancy} from "../../../actions/vacancyAction";
import { deleteVacancy } from "../../../actions/vacancyAction";

const Allvacancy = (props) => {

  // dispatch
  const dispatch = useDispatch();
  // hooks
  const vacancy = useSelector(
    (state) => state.vacancy
  );
  
  console.log(vacancy);
//   console.log(vacancy.image)

  // use effect
  useEffect(() => {
    dispatch(viewVacancy());
  }, []);

  function handleRemoveUser(id)
  {
    if(window.confirm('መረጃው ከ ዳታቤዝ ሁሉ ይሰረዛል. እርግተኛ ነህ ሙሉ ዳታው ይጥፋ !')){
    dispatch(deleteVacancy(id))
    }
  }
    return(
    <>
 <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    
<table class="table-fixed text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="p-4">
                <div class="flex items-center">
                    <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                </div>
            </th>
            <th scope="col" class="px-6 py-3">
                Images
            </th>
            <th scope="col" class="px-6 py-3">
                job Title
            </th>
            <th scope="col" class="px-6 py-3">
                job Type
            </th>
            <th scope="col" class="px-6 py-3">
                location
            </th>
            <th scope="col" class="px-6 py-3">
                Post Date
            </th>
            <th scope="col" class="px-6 py-3">
                deadline
            </th>
            <th scope="col" class="px-6 py-3">
                Status
            </th>
            <th scope="col" class="px-6 py-3">
                Action
            </th>
        </tr>
    </thead>
    <tbody>
    {
        (vacancy.vacancy?.length)>0
          ?(
            vacancy?.vacancy?.map((vacancys, index) => (      
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="w-4 p-4">
                <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                </div>
            </td>
            <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <img class="w-10 h-10 rounded-full" src={`${BaseUrl}/images/${vacancys.image}`} alt="vacancy image"/>
            </th>
            <td class="px-6 py-4">
                 {vacancys.jobTitle}
            </td>
            <td class="px-6 py-4">
                 {vacancys.jobType}
            </td>
            <td class="px-6 py-4">
                 {vacancys.location}
            </td>
            <td class="px-6 py-4">
                 {vacancys.deadline}
            </td>
            <td class="px-6 py-4">
                 {vacancys.createdAt}
            </td>
            <td class="px-6 py-4">
                <div class="flex items-center">
                    <div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                </div>
            </td>
            <td class="px-6 py-4">

              {/** edit and delete button  start*/}
       <div className="space-y-2">
           <button
            className="text-xs px-2 py-2 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
           <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
           <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
           </svg>
           </button>

             <button
              className=" text-sm px-2 py-2 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick ={ () => handleRemoveUser(vacancys.id)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
              </svg>

              </button>
  
       </div>
           {/** edit and delete button  end*/}

            </td>
        </tr>
        ) ))
    :(<div>Search vacancy</div>)  
}
    </tbody>
</table>
</div>
    </>
    )
}
export default Allvacancy;

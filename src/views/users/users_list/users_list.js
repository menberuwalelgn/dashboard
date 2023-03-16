import React, { useState,useEffect} from "react";
import {useRef} from "react";
import { useReactToPrint } from 'react-to-print';
import { viewUser, searchUser } from "../../../actions/userAction";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import siltena from 'src/assets/images/blogs/aman.jpg';
import BaseUrl from "../../../utils/base_url";
import { deleteUser } from "../../../actions/userAction";

const Users_list= () =>{

  const LetterRef= useRef();
  const handlePrint = useReactToPrint({
      content: () => LetterRef.current,
      documentTitle: 'current-letter',
      onAfterPrint: () => alert('print success') 
  });
  // dispatch
  const dispatch = useDispatch();
  // hooks
  const users = useSelector(
    (state) => state.users
  );
  console.log(users);

  // use effect
  useEffect(() => {
    dispatch(viewUser());
  }, []);

  function handleRemoveUser(id)
  {
    if(window.confirm('መረጃው ከ ዳታቤዝ ሁሉ ይሰረዛል. እርግተኛ ነህ ሙሉ ዳታው ይጥፋ !')){
    dispatch(deleteUser(id))
    }
  }

  const [term, setTerm] = useState("");
  // const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Please enter search term!");
    dispatch(searchUser(term));
    console.log(term);
    setTerm("");
  };
    return(
<>

<div ref={LetterRef}>
 <form onSubmit={submitHandler}>
  <div class="flex justify-center">
  <div class="mb-3 xl:w-96">
    <div class="relative mb-4 flex w-full flex-wrap items-stretch">

      <input
        type="search"
        class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
        placeholder="ማንን ይፈልጋሉ"
        aria-label="Search"
        aria-describedby="button-addon1" 
        value={term}
        onChange={(e) => setTerm(e.target.value)}/>
        
      <button
        class="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
        type="submit"
        data-te-ripple-init
        data-te-ripple-color="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-5 w-5">
          <path
            fill-rule="evenodd"
            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
            clip-rule="evenodd" />
        </svg>
       </button>
    </div>
  </div>
</div>
</form>

<div className='text-sm'>
    <h3 className='px-6 font-bold'>users list</h3>
</div>
<div className='float-right pr-20'>
   <button onClick={handlePrint}>print</button>
 </div>
{/* <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" className="px-2 py-3">
                userCode
            </th>
            <th scope="col" className="px-2 py-3">
                Profile
            </th>
            <th scope="col" className="px-2 py-3">
                firstName
            </th>
            <th scope="col" className="px-2 py-3">
                middleName
            </th>
            <th scope="col" className="px-2 py-3">
                Email Address
            </th>
            <th scope="col" className="px-2 py-3">
                PhoneNumber
            </th>
            <th scope="col" className="px-2 py-3">
                Education
            </th>
            <th scope="col" className="px-2 py-3">
                Position
            </th>
            <th scope="col" className="px-2 py-3">
                CreatedAt
            </th>
            <th scope="col" className="px-2 py-3">
                Action
            </th>
        </tr>
    </thead> */}
        {/* <tbody>
        {
        (users.users?.length)>0
          ?(
            users?.users?.map((user) => (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50
         dark:hover:bg-gray-600" key={user.userCode}>
          
            <td className="flex items-center px-6 py-2">
               <div className="text-base font-semibold">{user.userCode}</div>
            </td>
            <td className="px-6 py-2">
            <img className="w-12 h-12 rounded-full" src={`${BaseUrl}/images/${user.profilePic}`} alt="profile Img"/>
            </td>
            <td className="px-6 py-2">
              {user.firstName}
            </td>
            <td className="px-6 py-2">
             {user.middleName}
            </td>
            <td className="px-6 py-2">
             {user.email} 
            </td>
            <td className="px-6 py-2">
             {user.phoneNumber} 
            </td>
            <td className="px-6 py-2">
             {user.education} 
            </td>
            <td className="px-6 py-2">
             {user.position}
            </td>
            <td className="px-6 py-2">
             {user.createdAt} 
            </td>
            <td className="px-6 py-2">

           
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
              onClick ={ () => handleRemoveUser(user.id)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
              </svg>

              </button>
  
       </div>
    </tr>
    ) ))
    :(<div>Search Users</div>)  
}
    </tbody> */}
{/* </table>
</div>          
</div>   */}


<div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light text-gray-500 dark:text-gray-400">
          <thead class="border-b font-medium text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-2"> userCode</th>
              <th scope="col" class="px-2">Profile</th>
              <th scope="col" class="px-2">firstName</th>
              <th scope="col" class="px-2">middleName</th>
              <th scope="col" class="px-2">Email Address</th>
              <th scope="col" class="px-2">PhoneNumber</th>
              <th scope="col" class="px-2">Education</th>
              <th scope="col" class="px-2">Position</th>
              <th scope="col" class="px-2">CreatedAt</th>
              <th scope="col" class="px-2">Action</th>
            </tr>
          </thead>
 
         <tbody>
      {
        (users.users?.length)>0
          ?(
            users?.users?.map((user) => (

            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50
         dark:hover:bg-gray-600" key={user.userCode}>

              <td class="whitespace-nowrap px-6 py-4 font-medium">{user.userCode}</td>
              <td class="whitespace-nowrap px-6 py-4">
              <img className="w-12 h-12 rounded-full" src={`${BaseUrl}/images/${user.profilePic}`} alt="profile Img"/>
              </td>
              <td class="whitespace-nowrap px-2">{user.firstName}</td>
              <td class="whitespace-nowrap px-2">{user.middleName}</td>
              <td class="whitespace-nowrap px-2">{user.email}</td>
              <td class="whitespace-nowrap px-2">{user.phoneNumber}</td>
              <td class="whitespace-nowrap px-2">{user.education}</td>
              <td class="whitespace-nowrap px-2">{user.position}</td>
              <td class="whitespace-nowrap px-2">{user.createdAt}</td>
              <td class="whitespace-nowrap px-2">
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
              onClick ={ () => handleRemoveUser(user.id)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z" clip-rule="evenodd" />
              </svg>

              </button>
  
       </div>
              </td>
            </tr>

    )) )
    :(<div>Search Users</div>)  
}
          </tbody> 
        </table>
      </div>
    </div>
  </div>
</div>
</div>
</>

    )
}
export default Users_list;
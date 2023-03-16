import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { AddVacancy } from "../../../actions/vacancyAction";

const Addvacancy = (props) => {

  // variable declaration
  const [picture, setPicture] = useState(null);
  const [getImg, setImg] = useState(null);

  // use form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  // use selector
  const vacancy = useSelector(
    (state) => state.vacancy
  );
  const dispatch = useDispatch();
  // when image is uploaded
  const onImageUpload = (e) => {
    e.persist();
    setPicture(URL.createObjectURL(e.target.files[0]));
    setImg(e.target.files[0]);
  };

  // when the user fills all required fields and click register button
  const onSubmit = (data) => {
    // add image and file to object
    data.image = getImg;
    console.log(getImg)
    // data.file = getFile;

    // pass the data form data
    const formData = new FormData();
    Object?.entries(data).map((entry) => {
      const [key, value] = entry;
      
      formData.append(key, value);
    });

    // dispatch
    dispatch(AddVacancy(formData));
  };

    return(
        <>
<div class="w-full max-w-md mt-5">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      jobTitle
      </label>
      <input class="shadow appearance-none border rounded w-full max-w-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="titele" 
       type="text"
       placeholder="front end developer"
       {...register("jobTitle", {
         required: true,
       })}
       
       />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      jobType
      </label>
      <input class="shadow appearance-none border rounded w-full max-w-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="titele" 
       type="text"
       placeholder="full-time"
       {...register("jobType", {
         required: true,
       })}
       
       />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      location
      </label>
      <input class="shadow appearance-none border rounded w-full max-w-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="titele" 
       type="text"
       placeholder="bdr"
       {...register("location", {
         required: true,
       })}
       
       />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
      Deadline
      </label>
      <input class="shadow appearance-none border rounded w-full max-w-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="titele" 
       type="text"
       placeholder="3-6-2023"
       {...register("deadline", {
         required: true,
       })}
       
       />
    </div>

    <div class="mb-4">
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
    <textarea id="message" rows="4" class="block p-2.5 w-full max-w-xs text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    placeholder="Write your thoughts here..."
    type="text"
    {...register("description", {
      required: true,
    })}
    />
    </div>

            <div class="md:col-span-3 md:my-3">
             <label className="block font-serif text-lg text-gray-600 md:text-left mb-3 md:mb-0 pr-4">
                        Select picture
              </label>
              <label className="flex flex-col w-full h-20 border-4 bg-gray-100 border-gray-300 border-dashed hover:bg-white hover:border-gray-300">
                 {getImg ? (
                   <img
                    src={picture}
                    alt="blog photo"
                    className="m-2 h-20"
                    />
                 ) : (
                <>
                   <div className="flex flex-col items-center justify-center pt-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 text-yellow-600 group-hover:text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                       <path
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         stroke-width="2"
                         d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                           />
                        </svg>
                          <p class="pt-1 text-lg font-serif tracking-wider text-yellow-600 group-hover:text-gray-600">
                            Upload
                          </p>
                      </div>
                            <input
                              type="file"
                              {...register("avatar")}
                              onChange={onImageUpload}
                              className="opacity-0"
                            />
                          </>
                         )} 
                      </label>
                    </div>
    <div class="flex items-center justify-between">
      <button class="bg-red-400 hover:bg-hoverButton text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
         type="submit">
        Add New vacancies 
      </button>
    </div>
  </form>
</div>
    </>
    )
    };
export default Addvacancy;
import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import {sendLetter} from '../../../../actions/letterAction';

const SendLetter = (props) =>{

    const [getFile, setFile] = useState(null);

     // use selector
    const letter = useSelector(
      (state) => state.letter
    );
    const dispatch = useDispatch();
  // use form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  // when the user fills all required fields and click register button
  const onSubmit = (data) => {
    // add file to object
    data.letterFile = getFile;
    data.letterType ="employment letter";
    // pass the data form data 
    const formData = new FormData();
    Object?.entries(data).map((entry) => {
      const [key, value] = entry;
      
      formData.append(key, value);
    });

    // dispatch
    dispatch(sendLetter(formData));
  };
    return(
<>
      <div className="w-full xl:w-10/12 lg:w-10/12 md:w-11/12 mx-auto xl:mt-10 md:mt-10 mt-2 bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>   
        <div>
        <label className="block font-serif text-lg text-gray-600 md:text-left mb-3 md:mb-0 pr-4"
        {...register("letterType", {
        
        })}
        />  
  
        </div>
            <div class="ml-5 w-72">
                      <label className="block font-serif text-lg text-gray-600 md:text-left mb-3 md:mb-0 pr-4">
                         የጻፉትን የቅጥር ውል ይላኩ
                      </label>
                      <label className="flex flex-col w-full h-20 border-4 bg-gray-100 border-gray-300 border-dashed hover:bg-white hover:border-gray-300">
                        {getFile ? (
                          <span className="text-center my-2 text-base">
                            <span className="text-yellow-600">
                              {getFile.name}
                            </span>{" "}
                            is uploaded
                          </span>
                        ) : (
                          <>
                            <div className="flex flex-col items-center justify-center pt-1">
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
                                ይምረጡ
                              </p>
                            </div>
                            <input
                              type="file"
                              {...register("letterFile")}
                              onChange={(event) => {
                                setFile(event.target.files[0]);
                              }}
                              className="opacity-0"
                            />
                          </>
                         )} 
                      </label>
                    </div>
                    <div class="mt-5 ml-10">
                        <button type="submit" class="bg-red-400 hover:bg-hoverButton text-white py-3 px-6 rounded">
                           ይላኩ
                        </button>
                    </div>
              </form>
            </div>
</>
    )
}
export default SendLetter;
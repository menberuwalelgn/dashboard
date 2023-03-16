import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import { registerUser } from '../../../actions/userAction';
const Add_user= () =>{

  // variable declaration
  const [picture, setPicture] = useState(null);
  const [getImg, setImg] = useState(null);
  const [getFile, setFile] = useState(null);

  // use form
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  // use selector
  const users = useSelector(
    (state) => state.users
  );

  const dispatch = useDispatch();
  const params = useParams();

  // when image is uploaded
  const onImageUpload = (e) => {
    e.persist();
    setPicture(URL.createObjectURL(e.target.files[0]));
    setImg(e.target.files[0]);
  };

  // when the user fills all required fields and click register button
  const onSubmit = (data) => {
    // add image and file to object
    data.profilePic = getImg;
    data.file = getFile;
    data.password = "12345678";
    // data.vacancyID = params.id;

    // pass the data form data
    const formData = new FormData();
    Object?.entries(data).map((entry) => {
      const [key, value] = entry;
      
      formData.append(key, value);
    });

    // dispatch
    dispatch(registerUser(formData));
  };
    return(
<>

<div class="min-h-screen flex items-center">
      <div class="w-full xl:w-10/12 lg:w-10/12 md:w-11/12 mx-auto xl:mt-10 md:mt-10 mt-2">
        <div>
          <p class="text-gray-500 mb-6 text-center">
            ሁሉም መረጃዎች አስፈላጊ ስለሆነ በትክክል ይሙሉ።
          </p>
          <div class="bg-white rounded mb-6">
            <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 mx-4 ">
             
              {/* <div class="text-gray-600">
                <div className="hidden md:flex">
                  <ul className="list-reset py-2 md:py-0">
                    <li className="py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent">
                       <div
                        className="block pl-4 align-middle text-yellow-600 no-underline hover:text-primary"
                        onClick={() =>
                          window.location.replace("/address/#section1")
                        }
                      >
                        <span className="pb-1 md:pb-0 text-sm ">የእርስዎ መረጃ</span>
                      </div> 
                    </li>
                  </ul>
                </div>
              </div> */}

              <div class="lg:col-span-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="grid gap-20 gap-y-4 text-sm grid-cols-1 md:grid-cols-6 ">
                    <div class="md:col-span-2 md:my-3">
                      <label for="full_name">ስም</label>
                      <input
                        type="text"
                        {...register("firstName", {
                          required: true,
                          maxLength: 10,
                        })}
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="አበበ"
                      />
                      {/* {errors.firstName && ( )} */}
                        {/* <p className="text-red-500">ትክክለኛ ስም ማስገባትዎን ያረጋግጡ</p> */}
                      
                    </div>
                    <div class="md:col-span-2 md:my-3">
                      <label for="full_name">የአባት ስም</label>
                      <input
                        type="text"
                        {...register("middleName", {
                          required: true,
                          maxLength: 10,
                        })}
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="ከበደ"
                      />
                      {/* {errors.middleName && (   )} */}
                        {/* <p className="text-red-500">ያስገቡትን የአባት ስም ያረጋግጡ</p> */}
                     
                    </div>
                    <div class="md:col-span-2 md:my-3">
                      <label for="email">የአያት ስም</label>
                      <input
                        type="text"
                        {...register("lastName", {
                          required: true,
                          maxLength: 10,
                        })}
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="አየለ"
                      />
                      {/* {errors.lastName && (  )} */}
                        {/* <p className="text-red-500">ያስገቡትን የአያት ስም ያረጋግጡ</p> */}
                     
                    </div>
                    <div className="md:col-span-2 md:mt-10 w-52">
                      <label for="email " className="text-base">
                        ጾታ
                      </label>
                      <label className="inline-flex px-4  items-center ">
                        <input
                          type="radio"
                          value="male"
                          {...register("gender", {
                            required: true,
                          })}
                          className=" form-radio "
                        />
                        <span className="ml-1 font-serif ">ወንድ</span>
                      </label>
                      <label className="inline-flex px-2 items-center ">
                        <input
                          type="radio"
                          value="female"
                          {...register("gender", {
                            required: true,
                          })}
                          className=" form-radio"
                        />
                        <span className="ml-1 font-serif">ሴት</span>
                      </label>
                      {/* {errors.gender && ( )} */}
                        {/* <p className="text-red-500">ያስገቡት ጾታ ትክክል መሆኑን ያረጋግጡ</p> */}
                      
                    </div>
                    <div class="md:col-span-2 md:my-3 w-52">
                      <label for="email">የሚያመለክቱበት የስራ ሀላፊነት</label>
                      <input
                        type="text"
                        {...register("position", {
                          required: true,
                          maxLength: 30,
                        })}
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="ሶፍትዌር ማበልጸግ"
                      />
                      {/* {errors.position && ( )} */}
                        {/* <p className="text-red-500">
                          ያስገቡት የስራ ሀላፊነት ትክክል መሆኑን ያረጋግጡ
                        </p> */}
                      
                    </div>
                    <div class="md:col-span-2 md:mt-10 w-52">
                      <label for="email">የጋብቻ ሁኔታ</label>
                      <label className="inline-flex  items-center">
                        <input
                          type="radio"
                          value="sigle"
                          {...register("maritalStatus", {
                            required: true,
                          })}
                          className="ml-2 form-radio "
                        />
                        <span className="ml-1 font-serif ">ያገባ</span>
                      </label>
                      <label className="inline-flex px-2 items-center ">
                        <input
                          type="radio"
                          value="married"
                          {...register("maritalStatus", {
                            required: true,
                          })}
                          className=" form-radio"
                        />
                        <span className="ml-1 font-serif ">ያላገባ</span>
                      </label>
                      {/* {errors.maritalStatus && ( )} */}
                        {/* <p className="text-red-500">
                          ያስገቡት የጋብቻ ሁኔታ ትክክል መሆኑን ያረጋግጡ
                        </p> */}
                      
                    </div>
                    <div class="md:col-span-2 md:my-3">
                      <label for="email">የሙያ ዘርፍ</label>
                      <input
                        type="text"
                        {...register("profession", {
                          required: true,
                          maxLength: 30,
                        })}
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="አይሲቲ"
                      />
                      {/* {errors.profession && (  )} */}
                        {/* <p className="text-red-500">
                          ያስገቡት የሙያ ዘርፍ ትክክል መሆኑን ያረጋግጡ
                        </p> */}
                     
                    </div>
                    <div class="md:col-span-2 md:my-3">
                      <label for="email">የትምህርት ዝግጅት</label>
                      <input
                        type="text"
                        {...register("education", {
                          required: true,
                          maxLength: 30,
                        })}
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="ዲፕሎማ"
                      />
                      {/* {errors.education && ( )} */}
                        {/* <p className="text-red-500">
                          ያስገቡት	የትምህርት ዝግጅት ትክክል መሆኑን ያረጋግጡ
                        </p> */}
                      
                    </div>
                    <div class="md:col-span-2 md:my-3">
                      <label for="city">ከተማ/ዞን </label>
                      <input
                        type="text"
                        {...register("city", 
                        { required: true, 
                          maxLength: 30 })}
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="ባህር ዳር"
                      />
                      {/* {errors.city && (  )} */}
                        {/* <p className="text-red-500">ያስገቡት ትክክል መሆኑን ያረጋግጡ</p> */}
                    </div>
                    <div class="md:col-span-2 md:my-3">
                      <label for="woreda">ክ/ከተማ/ወረዳ</label>
                      <input
                        type="text"
                        {...register("woreda", {
                          required: true,
                          maxLength: 30,
                        })}
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="ቴወድሮስ"
                      />
                      {/* {errors.woreda && ( )} */}
                        {/* <p className="text-red-500">ያስገቡት ትክክል መሆኑን ያረጋግጡ</p> */}
                      
                    </div>
                    <div class="md:col-span-2 md:my-3">
                      <label for="kebele">ቀበሌ</label>
                      <input
                        type="text"
                        {...register("kebele", {
                          required: true,
                          maxLength: 30,
                        })}
                        class="h-10 border mt-1 rounded px-4 w-full  bg-gray-50"
                        placeholder="ቀበሌ-14"
                      />
                      {/* {errors.kebele && (  )} */}
                        {/* <p className="text-red-500">
                          ያስገቡት ቀበሌ ትክክል መሆኑን ያረጋግጡ
                        </p> */}
                     
                    </div>
                    <div class="md:col-span-2 md:my-3">
                      <label for="phone">ስልክ ቁጥር</label>
                      <input
                        type="text"
                        {...register("phoneNumber", {
                          required: true,
                          pattern: /((^(\+251|0)(9|7)\d{2})-?\d{6})$/,
                        })}
                        class="h-10 border mt-1 rounded px-4  bg-gray-50"
                        placeholder="+251999999999"
                      />
                      {/* {errors.phoneNumber && ( )} */}
                        {/* <p className="text-red-500">
                          ያስገቡት  ትክክል መሆኑን ያረጋግጡ
                        </p> */}
                      
                    </div>
                    <div class="md:col-span-2 md:my-3">
                      <label for="email">ኢሜል</label>
                      <input
                        type="email"
                        {...register("email", {
                          required: true,
                          pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="email@domain.com"
                      />
                      {/* {errors.email && ( )} */}
                        {/* <p className="text-red-500">
                          ያስገቡት ኢሜል ትክክል መሆኑን ያረጋግጡ
                        </p> */}
                      
                    </div>
                    <div class="md:col-span-2 md:my-3">
                      <label for="email">የልደት ዘመን(ዓ.ም)</label>
                      <input
                        type="text"
                        {...register("dateOfBirth", {
                          required: true,
                          maxLength: 10,
                        })}
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="2010"
                      />
                      {/* {errors.dateOfBirth && (  )} */}
                        {/* <p className="text-red-500">
                          ያስገቡት ልደት ዘመን ትክክል መሆኑን ያረጋግጡ
                        </p> */}
                     
                    </div>

                    <div class="md:col-span-2 md:my-3">
                      <label for="pass">password</label>
                      <input
                        type="password"
                        {...register("dateOfBirth", {
                          required: true,
                          maxLength: 10,
                        })}
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="2010"
                      />
                      {/* {errors.dateOfBirth && (  )} */}
                        {/* <p className="text-red-500">
                          ያስገቡት ልደት ዘመን ትክክል መሆኑን ያረጋግጡ
                        </p> */}
                     
                    </div>

                    <div class="md:col-span-2 md:my-3">
                      <label for="pass">password</label>
                      <input
                        type="password"
                        {...register("dateOfBirth", {
                          required: true,
                          maxLength: 10,
                        })}
                        class="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder="2010"
                      />
                      {/* {errors.dateOfBirth && (  )} */}
                        {/* <p className="text-red-500">
                          ያስገቡት ልደት ዘመን ትክክል መሆኑን ያረጋግጡ
                        </p> */}
                     
                    </div>

                    <div class="md:col-span-3 md:my-3">
                      <label className="block font-serif text-lg text-gray-600 md:text-left mb-3 md:mb-0 pr-4">
                        የእርስዎ ፎቶ
                      </label>
                      <label className="flex flex-col w-full h-20 border-4 bg-gray-100 border-gray-300 border-dashed hover:bg-white hover:border-gray-300">
                        {getImg ? (
                          <img
                            src={picture}
                            alt="img file"
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
                                ይምረጡ
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
                    <div class="md:col-span-2 md:my-3">
                      <label className="block font-serif text-lg text-gray-600 md:text-left mb-3 md:mb-0 pr-4">
                        የትምህርት ማስረጃ
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
                              {...register("file")}
                              onChange={(event) => {
                                setFile(event.target.files[0]);
                              }}
                              className="opacity-0"
                            />
                          </>
                         )} 
                      </label>
                    </div>
                    <div class="md:col-span-6">
                      <div class="inline-flex items-end">
                        <button type="submit" class="bg-primary hover:bg-hoverButton text-white font-bold py-3 px-6 rounded">
                           ይመዝግቡ
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</>

    )
}
export default Add_user;
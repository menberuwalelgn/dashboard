import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import {updateBlog} from "../../../actions/blogAction";
import{singleBlogs} from "../../../actions/blogAction";
import { useNavigate, useParams } from "react-router-dom";


const updateblogs = (props) => {

  const {id} = useParams();

  const dispatch = useDispatch();
  
  const onSubmit = (data) => {
     console.log(data);
    const formData = new FormData();
    Object?.entries(data).map((entry) => {
      const [key, value] = entry;
      
      formData.append(key, value);
    });
   
     dispatch(updateBlog(id, formData));
  };
// const {state, setState}= useState(
//   {
//     title:"",
//     description: "", 
//     file: "",
//   }
// );

  // console.log(blogs)
//  useEffect(() =>{
//     if(blogs){
//       setState({...blogs });
//     }
//  },[blogs]);

 // use effect
  // useEffect(() => {
  //    dispatch(singleBlogs(id));
  // }, []);

  // const [updateByid]=singleBlogs(id);

  // const [title, setTitle]=useState('');
  // const [description, setDescription]=useState('');

  // const titleHandler=(e)=>{
  //   setTitle(e.target.value);
  // };
 
  // const descriptionHandler=(e)=>{
  //   setDescription(e.target.value);
  // };

  // useEffect(() => {
  //  const data = () =>{
  //       if(blogs.data){
  //         setTitle(blogs.data.title);
  //         setDescription(blogs.data.description);
  //       }
  //  };
  //  data();
  // }, [blogs.data]);
  // console.log(title)
  // const userInfo = localStorage.getItem("userInfo")
  // ? JSON.parse(localStorage.getItem("userInfo"))
  // : null;
  // use form
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onReset = async () => {
    const result = await dispatch(singleBlogs(id));
    console.log(result)
    reset(result.payload);
  };

  // use effect
  useEffect(() => {
    onReset();
  }, []);
//onSubmit={handleSubmit(onSubmit)}
    return(
        <React.Fragment>
<div class="w-full max-w-md mt-5 ml-5">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        titele
      </label>
      <input class="shadow appearance-none border rounded w-full max-w-xs py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="titele" 
       type="text"
       placeholder="titele"
       {...register("title", {
         required: true,
       })}
       
       />
    </div>
    <div class="mb-4">
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Body</label>
    <textarea id="message" rows="4" class="block p-2.5 w-full max-w-xs text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    placeholder="Write your thoughts here..."
    type="text"
    {...register("description", {
      required: true,
    })}
    />
    </div>

    <div class="flex items-center justify-between">
      <button class="bg-red-400 hover:bg-hoverButton text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
         type="submit">
        upDate blogs 
      </button>
    </div>
  </form>
</div>
    </React.Fragment>
    )
    };
export default updateblogs;
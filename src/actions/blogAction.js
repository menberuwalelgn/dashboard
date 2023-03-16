// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../utils/base_url";
import { handleSuccess, handleError } from "../utils/toast";

export const addBlogs = createAsyncThunk(

    "blog",
    async (blogData, thunkAPI) => {
      try {
        
        const userInfo = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null;

        let baseUrl = `${BaseUrl}promotionapi/blogs/create`;
        
        // let response = await createContact(message);
        let response = await axios.post(baseUrl, blogData,  {headers: { Authorization: `Bearer ${userInfo.token}` } });
        console.log(response);
        if (response.status === 201) {
          handleSuccess("send blogs successfull !");
          return response.data.blogs;
        } else {
          handleError(response.message);
          return thunkAPI.rejectWithValue(response.data);
        }
      } catch (e) {
        console.log("Error", e.response.data);
        handleError(e.response.data.message);
        return thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );

  export const viewBlogs = createAsyncThunk(
    "blogs",
    async (thunkAPI) => {
      try {
        let baseUrl = `${BaseUrl}/promotionapi/blogs/all`;
        
        // let response = await createContact(message);
        let response = await axios.get(baseUrl);
        console.log(response);
        if (response.status === 200) {
          return response.data;
        } else {
          handleError(response.message);
          return thunkAPI.rejectWithValue(response.data);
        }
      } catch (e) {
        console.log("Error", e.response.data);
        handleError(e.response.data.message);
        return thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );

  export const deleteBlog = createAsyncThunk(

    "blogs",
    async (id, thunkAPI) => {
      try {
        const userInfo = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null;
        let baseUrl = `${BaseUrl}promotionapi/blogs/${id}`;
        
        // let response = await createContact(message);
        let response = await axios.delete(baseUrl, {headers: { Authorization: `Bearer ${userInfo.token}` } });
        console.log(response);
        if (response.status === 201) {
          handleSuccess("delete successfull !");
          return response.data.blogs;
        } else {
          handleError(response.message);
          return thunkAPI.rejectWithValue(response.data);
        }
      } catch (e) {
        console.log("Error", e.response.data);
        handleError(e.response.data.message);
        return thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );

  export const updateBlog =createAsyncThunk(

    "blogs",
    async (id, blogData, thunkAPI) => {
      try {
        const userInfo = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null;

        let baseUrl = `${BaseUrl}promotionapi/blogs/${id}`;
        
        // let response = await createContact(message);
       
        let response = await axios.put(baseUrl,blogData, {headers: { Authorization: `Bearer ${userInfo.token}` } });
       
        console.log(response);
        
        if (response.status === 200) {
          handleSuccess("edit blog successfull !");
          return response.data.blogs;
        } else {
          handleError(response.message);
          return thunkAPI.rejectWithValue(response.data);
        }
      } catch (e) {
        console.log("Error", e.response.data);
        handleError(e.response.data.message);
        return thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );

  export const singleBlogs  = createAsyncThunk(
    "blogs",
    async (id, thunkAPI) => {
      try {
        let baseUrl = `${BaseUrl}promotionapi/blogs/${id}`;
        
        // let response = await createContact(message);
        let response = await axios.get(baseUrl);
        console.log(response);
        if (response.status === 200) {
          return response.data;
        } else {
          handleError(response.message);
          return thunkAPI.rejectWithValue(response.data);
        }
      } catch (e) {
        console.log("Error", e.response.data);
        handleError(e.response.data.message);
        return thunkAPI.rejectWithValue(e.response.data);
      }
    }
  );
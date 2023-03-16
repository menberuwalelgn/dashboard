// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../utils/base_url"

import { handleSuccess, handleError } from "../utils/toast";
export const viewUser = createAsyncThunk(
  "users",
  async (thunkAPI) => {
    try {
      let URL = `${BaseUrl}promotionapi/users/all`;

      // let response = await createContact(message);
      let response = await axios.get(URL);
      console.log(response);
      if (response.status === 200) {
        return response.data;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      handleError("loading...");
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(

  "user",
  async (userData, thunkAPI) => {
    try {

      let baseUrl = `${BaseUrl}promotionapi/users/create`;
      
      // let response = await createContact(message);
      let response = await axios.post(baseUrl, userData);
      console.log(response);
      if (response.status === 201) {
        handleSuccess("register successfull !");
        return response.data.users;
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


export const deleteUser = createAsyncThunk(

  "users",
  async (id, thunkAPI) => {
    try {

      let baseUrl = `${BaseUrl}promotionapi/users/${id}`;
      
      // let response = await createContact(message);
      let response = await axios.delete(baseUrl, id);
      console.log(response);
      if (response.status === 201) {
        handleSuccess("delete successfull !");
        return response.data.users;
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

//login users
export const loginUser = createAsyncThunk(
  "user",
  async (authData, thunkAPI) => {
    try {
      // base url
      let baseUrl = "https://backend.eplusapp.et/promotionapi/users/login";

      // response
      let response = await axios.post(baseUrl, authData);
     console.log(response)
      // condition
      if (response.status === 200) {

        // handleSuccess(response.data.message);
        // put the user info into local storage
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        
        return response.data;
      } else {

        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      console.log(e.response);

      handleError(e.response.data.message);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

//login users
export const searchUser = createAsyncThunk(
  "user",
  async (term, thunkAPI) => {
    try {
      // base url
      console.log("hello search function1")
      let baseUrl = `https://backend.eplusapp.et/promotionapi/users/all?key=${term}`;
      console.log("hello search function2")
      // response
      let response = await axios.get(baseUrl);
      // let response = await createContact(message);
      console.log("hello search function3")
      console.log(response);
      if (response.status === 200) {
        return response.data;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      handleError("search single user...");
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

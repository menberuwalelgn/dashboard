import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../utils/base_url"
import { handleSuccess, handleError } from "../utils/toast";

export const sendLetter = createAsyncThunk(

  "letter",
  async (letterData, thunkAPI) => {
    try {

      const userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null  
      console.log(userInfo.token);

      let baseUrl = `${BaseUrl}promotionapi/letters/create`;
      
      // let response = await createContact(message);
      let response = await axios.post(baseUrl, letterData, {headers: { Authorization: `Bearer ${userInfo.token}` } });
      console.log("hello 1");
      if (response.status === 201) {
        handleSuccess("send letter successfull !");
        return response.data.letterReducer;
      } else {
        handleError(response.message);
        console.log("hello2")
        return thunkAPI.rejectWithValue(response.data);
        
      }
    } catch (e) {
      console.log("hello catch")
      console.log("Error", e.response.data);
      handleError(e.response.data.message);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

export const viewLetter = createAsyncThunk(
  "letter",
  async (thunkAPI) => {
    try {
      let baseUrl = `${BaseUrl}promotionapi/letters/officialletters`;
      
      // let response = await createContact(message);
      let response = await axios.get(baseUrl);
      console.log(response);
      if (response.status === 200) {
        console.log(response.data)
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

export const businessLetter = createAsyncThunk(
  "letter",
  async (thunkAPI) => {
    try {
      let baseUrl = `${BaseUrl}promotionapi/letters/businessletters`;
      
      // let response = await createContact(message);
      let response = await axios.get(baseUrl);
      console.log(response);
      if (response.status === 200) {
        console.log(response.data)
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

export const employmentLetter = createAsyncThunk(
  "letter",
  async (thunkAPI) => {
    try {
      let baseUrl = `${BaseUrl}promotionapi/letters/employmentletters`;
      
      // let response = await createContact(message);
      let response = await axios.get(baseUrl);
      console.log(response);
      if (response.status === 200) {
        console.log(response.data)
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
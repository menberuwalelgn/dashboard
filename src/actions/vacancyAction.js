// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../utils/base_url";
import { handleSuccess, handleError } from "../utils/toast";

export const AddVacancy = createAsyncThunk(
    "vacancy",
    async (vacancyData, thunkAPI) => {
      try {
        const userInfo = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null;
        let baseUrl = `${BaseUrl}promotionapi/vacancies/create`;
        
        let response = await axios.post(baseUrl, vacancyData, {headers: { Authorization: `Bearer ${userInfo.token}` } });
        console.log(response);
        if (response.status === 201) {
          handleSuccess("send vacancy successfull !");
          return response.data.vacancy;
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

  export const viewVacancy = createAsyncThunk(
    "vacancy",
    async (thunkAPI) => {
      try {
        let baseUrl = `${BaseUrl}promotionapi/Vacancies/all`;
        
        // let response = await createContact(message);
        let response = await axios.get(baseUrl);
        console.log(response);
        console.log("vacancy action")
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

  export const deleteVacancy = createAsyncThunk(

    "vacancy",
    async (id, thunkAPI) => {
      try {
        const userInfo = localStorage.getItem("userInfo")
        ? JSON.parse(localStorage.getItem("userInfo"))
        : null;
        let baseUrl = `${BaseUrl}promotionapi/vacancies/${id}`;
      
        // let response = await axios.put(baseUrl, userData,{headers: { Authorization: Bearer ${user.token} }});
        let response = await axios.delete(baseUrl, {headers: { Authorization: `Bearer ${userInfo.token}` } });
        console.log(response);
        if (response.status === 201) {
          handleSuccess("Vacancy Delete successfull !");
          return response.data.vacancy;
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
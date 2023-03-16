// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
export const sidebarShowAction = createAsyncThunk(
    "sidebar",
    async (sidebarShow,thunkAPI) => {
      try {
         return sidebarShow
      } catch (e) {
        return thunkAPI.rejectWithValue("error");
      }
    }
  );

  
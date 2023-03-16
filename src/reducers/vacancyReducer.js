import { createSlice } from '@reduxjs/toolkit';
import { viewVacancy } from '../actions/vacancyAction';
import { AddVacancy } from '../actions/vacancyAction';
import { deleteVacancy } from '../actions/vacancyAction';

// initial state
const initialState = {
    loading: false,
    vacancy:{},
    vacancy:[],
    error: false,
    success: false,
  }

// users slice
const vacancySlice = createSlice({
    name: 'vacancy',
    initialState, 
    reducers: {},
    extraReducers: {

   // view all vacancy
   [viewVacancy.pending]: (state) => {
    state.loading = true
    state.error = false
  },
  [viewVacancy.fulfilled]: (state, { payload }) => {
    state.loading = false
    state.success = true 
    state.vacancy = payload
  },
  [viewVacancy.rejected]: (state, { payload }) => {
    state.loading = false
    state.error = true
      },

   // send vacancy
   [AddVacancy.pending]: (state) => {
    state.loading = true
    state.error = null
  },
  [AddVacancy.fulfilled]: (state, { payload }) => {
    state.loading = false
    state.success = true 
    state.vacancy = payload
    state.error = false
    console.log(payload)
  },
  [AddVacancy.rejected]: (state, { payload }) => {
    state.loading = false
    state.error = true
    state.success = false
  },

   // delete vacancy
   [deleteVacancy.pending]: (state) => {
    state.loading = true
    state.error = null
  },
  [deleteVacancy.fulfilled]: (state, { payload }) => {
    state.loading = false
    state.success = true 
    state.vacancy = payload
    state.error = false
    console.log(payload)
  },
  [deleteVacancy.rejected]: (state, { payload }) => {
    state.loading = false
    state.error = true
    state.success = false
  },
   }
})
export default vacancySlice.reducer;
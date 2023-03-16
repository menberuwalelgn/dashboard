import { createSlice } from '@reduxjs/toolkit'
import { sendLetter } from '../actions/letterAction';
import { viewLetter } from '../actions/letterAction';
import { businessLetter } from '../actions/letterAction';
import { employmentLetter } from '../actions/letterAction';

const initialState = {
  loading: false,
  letters:[],
  letters:{},
  letter:{},
  message: {},
  error: false,
  success: false,
}

const letterSlice = createSlice({
  name: 'letter',
  initialState,
  reducers: {},
  extraReducers: {
    // send letter
    [sendLetter.pending]: (state) => {
      state.loading = true
      state.error = false
    },
    [sendLetter.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // send letter successful
      state.message = payload
    },
    [sendLetter.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
   // view all application letter
   [viewLetter.pending]: (state) => {
    state.loading = true
    state.error = false
  },
  [viewLetter.fulfilled]: (state, { payload }) => {
    state.loading = false
    state.success = true 
    state.letter = payload
  },
  [viewLetter.rejected]: (state, { payload }) => {
    state.loading = false
    state.error = true
  },
     // view all business letter
     [businessLetter.pending]: (state) => {
      state.loading = true
      state.error = false
    },
    [businessLetter.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true 
      state.letter = payload
    },
    [businessLetter.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = true
    },
    
     // view all employment letter
     [employmentLetter.pending]: (state) => {
      state.loading = true
      state.error = false
    },
    [employmentLetter.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true 
      state.letter = payload
    },
    [employmentLetter.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = true
    },
  },
})
export default letterSlice.reducer
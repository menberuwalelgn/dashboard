import { createSlice } from '@reduxjs/toolkit';
import { sidebarShowAction } from '../actions/sidebar';


// initial state
const initialState = {
    loading: false,
    sidebarShow:true,
    error: false,
    success: false,
  }

// side slice
const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState, 
    reducers: {},
    extraReducers: {
  
    // send blogs
    [sidebarShowAction.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [sidebarShowAction.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.success = true 
        state.sidebarShow = payload
        state.error = false
      },
      [sidebarShowAction.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = true
        state.success = false

      },
    },
})
export default sidebarSlice.reducer;
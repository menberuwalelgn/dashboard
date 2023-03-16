import { createSlice } from '@reduxjs/toolkit';
import { addBlogs } from '../actions/blogAction';
import { viewBlogs } from '../actions/blogAction';
import { deleteBlog } from '../actions/blogAction';
import { updateBlog } from '../actions/blogAction';
import {singleBlogs} from '../actions/blogAction';

// initial state
const initialState = {
    loading: false,
    blogs:[],
    blog:{},
    error: false,
    success: false,
  }

// users slice
const lettersSlice = createSlice({
    name: 'blogs',
    initialState, 
    reducers: {},
    extraReducers: {
  
    // send blogs
    [addBlogs.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [addBlogs.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.success = true 
        state.blogs = payload
        state.error = false
        console.log(payload)
      },
      [addBlogs.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = true
        state.success = false

      },

   // view all blogs
   [viewBlogs.pending]: (state) => {
    state.loading = true
    state.error = false
  },
  [viewBlogs.fulfilled]: (state, { payload }) => {
    state.loading = false
    state.success = true 
    state.blogs = payload
  },
  [viewBlogs.rejected]: (state, { payload }) => {
    state.loading = false
    state.error = true
  },
    // delete blogs
    [deleteBlog.pending]: (state) => {
      state.loading = true
      state.error = false
    },
    [deleteBlog.fulfilled]: (state, { payload}) => {
      state.loading = false
      state.success = true 
      state.blogs = payload
    },
    [deleteBlog.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    [updateBlog.pending]: (state)=>{
      state.loading=true
      state.error=false
    },
    [updateBlog.fulfilled]: (state, {payload}) =>{
      state.loading=false
      state.success=true
      state.blogs=payload
    },
    [updateBlog.rejected]: (state, {payload}) =>{
      state.loading=false
      state.error=payload
    },
    
   // view all blogs
   [singleBlogs.pending]: (state) => {
    state.loading = true
    state.error = false
  },
  [singleBlogs.fulfilled]: (state, { payload }) => {
    state.loading = false
    state.success = true 
    state.blogs = payload
  },
  [singleBlogs.rejected]: (state, { payload }) => {
    state.loading = false
    state.error = true
  },
    },
})
export default lettersSlice.reducer;
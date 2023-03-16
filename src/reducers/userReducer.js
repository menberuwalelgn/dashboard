import { createSlice } from '@reduxjs/toolkit'
import { viewUser } from '../actions/userAction';
import { registerUser } from '../actions/userAction';
import { deleteUser, loginUser } from '../actions/userAction';
import { searchUser } from '../actions/userAction';

// initial state
const initialState = {
  loading: false,
  users:[],
  filter:[],
  user:[],
  user: {},
  error: false,
  success: false,
  message: null,
}

// users slice
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: {
    // view users
    [viewUser.pending]: (state) => {
      state.loading = true
      state.error = false
    },
    [viewUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true 
      state.users = payload
    },
    [viewUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

  
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true 
      state.userInfo = payload
      state.error = false
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = true
      state.message = payload
      state.success = false
    },

    // delete user
    [deleteUser.pending]: (state) => {
      state.loading = true
      state.error = false
    },
    [deleteUser.fulfilled]: (state, { payload}) => {
      state.loading = false
      state.success = true 
      state.users = payload
      console.log(payload)
    },
    [deleteUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

  // user login
  [loginUser.pending]: (state) => {
    state.loading = true
    state.error = null
  },
  [loginUser.fulfilled]: (state, { payload }) => {
    state.loading = false
    state.success = true
    state.error = false
    state.user = payload.user
    state.message = payload.message
  },
  [loginUser.rejected]: (state, { payload }) => {
    state.loading = false
    state.error = true
    state.message = payload.message
    state.success = false
  },
  [searchUser.loading]:(state)=>{
    state.loading=true
    state.error=null
  },
  [searchUser.fulfilled]:(state,{payload})=>{
    state.loading=false
    state.users=payload
    state.error=false
    state.success=true
    state.filter=payload
  },
  [searchUser.rejected]:(state, {payload})=>{
    state.loading=false
    state.error=payload
  }
  },

})

// export
export default usersSlice.reducer
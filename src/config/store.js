import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import letterReducer from '../reducers/letterReducer';
import userReducer from '../reducers/userReducer';
import blogReducer from '../reducers/blogReducer';
import vacancyReducer from '../reducers/vacancyReducer';
import sidebarReducer from '../reducers/sidebarReducer'

const store = configureStore({
  
  reducer: {
    letter:letterReducer,
    users: userReducer,
    blogs: blogReducer,
    vacancy: vacancyReducer,
    sidebar: sidebarReducer,
  }
})


export default store

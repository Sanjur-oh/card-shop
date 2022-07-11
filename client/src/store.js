import { configureStore } from '@reduxjs/toolkit';
import shoeReducer from './features/shoeSlice'
// import userReducer from './features/userSlice'


const store = configureStore({
    reducer: {
      shoe: shoeReducer
      // user: userReducer,
      // theme: themeReducer
    } 
  })

  export default store;
  
import { configureStore } from '@reduxjs/toolkit';
import shoeReducer from './features/shoeSlice'
import userReducer from './features/userSlice'


const store = configureStore({
    reducer: {
      user: userReducer,
      shoe: shoeReducer,
      // theme: themeReducer
    }, 
  })

  export default store;
  
// import { configureStore } from '@reduxjs/toolkit';
// // import reducers from './reducers/index'
// import shoeReducer from './features/shoeSlice'


// // const store = configureStore(reducers, {});
// const store = configureStore(shoeReducer, {});

// export default store;
  

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


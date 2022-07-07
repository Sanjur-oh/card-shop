import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import {BrowserRouter} from 'react-router-dom';
import  {Provider}  from "react-redux";
import userReducer from './features/userSlice'
// import themeReducer from './features/theme'
import shoeReducer from './features/shoeSlice'


const store = configureStore({
  reducer: {
    user: userReducer,
    shoe: shoeReducer,
    // theme: themeReducer
  }, 
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  
    <BrowserRouter> 
        <React.StrictMode>
          <Provider store={store}>
            <App />
          </Provider>
        </React.StrictMode>  
    </BrowserRouter> 
  



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

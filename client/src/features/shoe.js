// needs to be shoe 
import {createSlice} from "@reduxjs/toolkit";

const initialStateValue = ""

export const shoeSlice = createSlice({
    name: 'shoe',
    initialState: {value: initialStateValue },
    reducers: {
        // changeColor: ( state, action ) => {
        //     state.value = action.payload
    //     }, 
    },
})

export const {changeColor} = shoeSlice.actions

export default shoeSlice.reducer
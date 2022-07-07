import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

// from first demo
// const initialStateValue = {username: "", email: "", name: ""}

const initialState = { loading: false, shoes: [], error: '', }

// generates pending, fulfilled and rejected action types
export const fetchShoes = createAsyncThunk('shoe/fetchShoes', () => {
    return axios
        .get("/shoes")
        .then((response) => response.data)
})

// not positive on this one
export const fetchShoeId = createAsyncThunk(
    "shoes/fetchShoeId",
    async (id) => {
      fetch(`/shoes/${id}`, {
        method: "SHOW",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return id;
    }
  );

export const createShoes = createAsyncThunk(
    "shoes/createShoes",
    async (newShoes) => {
      return fetch(`/shoes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newShoes),
      }).then((res) => res.json());
    }
  );

  // could be shoeId
  export const deleteShoes = createAsyncThunk(
    "shoes/deleteShoes",
    async (id) => {
      fetch(`/shoes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return id;
    }
  );

const shoeSlice = createSlice({
    name: 'shoe',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchShoes.pending, (state) => {})
        builder.addCase(fetchShoes.fulfilled, (state, action) => {
            state.loading = false
            state.shoes = action.payload
            state.error = ''
        })
        builder.addCase(fetchShoes.rejected, (state, action) => {
            state.loading = false
            state.shoes = []
            state.error = action.error.message
        })
        // builder.addCase(createShoes.fulfilled, (state, action) => {
        //     state.shoes = [...state.shoes, action.payload];
        // })
        // builder.addCase(deleteshoes.fulfilled, (state, action) => {
        //     state.shoes = [...state.shoes, action.payload];
        // })
          

    },
})

// export const {login, logout} = userSlice.actions

export default shoeSlice.reducer
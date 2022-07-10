import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


// from first demo
// const initialStateValue = {username: "", email: "", name: ""}

const initialState = { loading: false, shoes: [], error: '', }

// generates pending, fulfilled and rejected action types
export const fetchShoes = createAsyncThunk('user/fetchShoes', () => {
  return fetch(`/shoes`) 
  .then((response) => response.json())
  .then((data) => data)
})


// not positive on this one
export const fetchShoe = createAsyncThunk("Shoes/fetchUser", (id) => {
  return fetch(`/shoes/${id}`) 
     .then((response) => response.json())
     .then((data) => data)
});

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



export default shoeSlice.reducer
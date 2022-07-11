import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


// from first demo
// const initialStateValue = {username: "", email: "", name: ""}

const initialState = { loading: false, shoes: [], error: '', }

// generates pending, fulfilled and rejected action types
export const fetchShoes = createAsyncThunk("shoes/fetchShoes", () => {
  return fetch("/shoes") 
  .then((response) => response.json())
  .then((data) => data)
})


// not positive on this one
export const fetchShoe = createAsyncThunk("shoes/fetchShoe", (id) => {
  return fetch(`/shoes/${id}`) 
     .then((response) => response.json())
     .then((data) => data)
});

export const createShoe = createAsyncThunk(
    "shoes/createShoe",
    async (newShoe) => {
      return fetch(`/shoes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newShoe),
      }).then((res) => res.json());
    }
  );

  // could be shoeId
  export const deleteShoe = createAsyncThunk(
    "shoes/deleteShoe",
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
        builder.addCase(createShoe.fulfilled, (state, action) => {
            state.shoes = [...state.shoes, action.payload];
        })
        builder.addCase(deleteShoe.fulfilled, (state, action) => {
            state.shoes = [...state.shoes, action.payload];
        })
          

    },
})



export default shoeSlice.reducer
import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// import axios from 'axios'

// from first demo
// const initialStateValue = {username: "", email: "", name: ""}

const initialState = { loading: false, users: [], error: '', }

// generates pending, fulfilled and rejected action types
// export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
//     return axios
//         .get("/users")
//         .then((response) => response.data)
// })

export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
  return fetch(`/users`) 
  .then((response) => response.json())
  .then((data) => data)
})

// not positive on this one
export const fetchUser = createAsyncThunk("users/fetchUser", (id) => {
     return fetch(`/users/${id}`) 
        .then((response) => response.json())
        .then((data) => data)
});

export const createUsers = createAsyncThunk(
    "users/createUsers",
    async (newUsers) => {
      return fetch(`/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUsers),
      }).then((res) => res.json());
    }
  );

  // could be userId
  export const deleteUsers = createAsyncThunk(
    "users/deleteUsers",
    async (id) => {
      fetch(`/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return id;
    }
  );

const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {})
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
        builder.addCase(createUsers.fulfilled, (state, action) => {
            state.users = [...state.users, action.payload];
        })
        // builder.addCase(deleteUsers.fulfilled, (state, action) => {
        //     state.users = [...state.users, action.payload];
        // })
          

    },
})

export const {login, logout} = userSlice.actions

export default userSlice.reducer










// import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// import axios from 'axios'

// // from first demo
// // const initialStateValue = {username: "", email: "", name: ""}

// const initialState = { loading: false, users: [], error: '', }

// // generates pending, fulfilled and rejected action types
// export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
//     return axios
//         .get("/users")
//         .then((response) => response.data)
// })

// const userSlice = createSlice({
//     name: 'user',
//     initialState: {value: initialState },
//     reducers: {
//         login: ( state, action ) => {
//             state.value = action.payload
//         }, 
        
//         logout: ( state ) => {
//             state.value = initialState
//         },
//     },
// })

// export const {login, logout} = userSlice.actions

// export default userSlice.reducer
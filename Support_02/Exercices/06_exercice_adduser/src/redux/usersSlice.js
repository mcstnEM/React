import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk pour récupérer tous les utilisateurs
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json();
});

// Thunk pour ajouter un utilisateur par ID
export const addUserById = createAsyncThunk('users/addUserById', async (userId) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  return response.json();
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(fetchUsers.pending, (state) => {
      //   state.status = 'loading';
      // })
      // .addCase(fetchUsers.fulfilled, (state, action) => {
      //   state.status = 'Succeeded'
      //   state.users = action.payload
      // })
      // .addCase(fetchUsers.rejected, (state, action) => {
        // state.status = 'Failed'
      //   state.status = action.error.message
      // })
      .addCase(addUserById.pending, (state) => {
        state.status = 'Loading';
      })
      .addCase(addUserById.fulfilled, (state, action) => {
        state.status = 'Succeeded'
        state.users.push(action.payload);
      })
      .addCase(addUserById.rejected, (state, action) => {
        state.status = 'Failed'
        state.error = action.error.message
      })
  },
});

export default usersSlice;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user:  {
    name: '',
    age: 0,
    email: ''
  }
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = initialState.user;
    }
  }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;


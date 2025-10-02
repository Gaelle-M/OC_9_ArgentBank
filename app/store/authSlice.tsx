// src/store/authSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  token: null,
  user: {
    userName: '',
  },
  error: null,
};

const authSlice = createSlice({
  name: 'auth', 
  initialState,
  reducers: {
    // Reducer pour la CONNEXION 
    signInSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user.userName = action.payload.userName; 
      state.error = null;
    },
    // Reducer pour la DÉCONNEXION
    signOut: (state) => {
  
      return initialState; 
    },
    // Reducer MISE À JOUR du nom
    updateUserName: (state, action) => {
      state.user.userName = action.payload; 
    },
  },
});

export const { signInSuccess, signOut, updateUserName } = authSlice.actions;

export default authSlice.reducer;
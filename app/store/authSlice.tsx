// src/store/authSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Définition de l'état initial pour l'authentification
  isAuthenticated: false,
  token: null,
  user: {
    userName: '',
    // Ajoutez d'autres infos si nécessaire, comme le prénom, le nom, etc.
  },
  error: null,
};

const authSlice = createSlice({
  name: 'auth', // Nom utilisé pour préfixer les actions
  initialState,
  reducers: {
    // 1. Reducer pour la CONNEXION (succès)
    signInSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user.userName = action.payload.userName; // Stocke le nom d'utilisateur
      state.error = null;
    },
    // 2. Reducer pour la DÉCONNEXION
    signOut: (state) => {
      // On réinitialise l'état au départ
      return initialState; 
    },
    // 3. Reducer pour la MISE À JOUR du nom
    updateUserName: (state, action) => {
      state.user.userName = action.payload; // action.payload contiendra le nouveau nom
    },
  },
});

// RTK génère automatiquement les actions pour vous !
export const { signInSuccess, signOut, updateUserName } = authSlice.actions;

// On exporte le reducer qui sera utilisé dans store.ts
export default authSlice.reducer;
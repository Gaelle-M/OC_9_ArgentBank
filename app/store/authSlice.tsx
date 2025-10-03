import { createSlice} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserProfilPayload {
    userName: string;
}

interface AuthState {
    isAuthenticated: boolean;
    token: string | null;
    user: {
        userName: string;
    };
    error: string | null;
}

const initialState: AuthState = {
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
    // Reducer mise à jour profil
    setProfile: (state, action: PayloadAction<UserProfilPayload>) => {
        state.user.userName = action.payload.userName;
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

export const { signInSuccess, setProfile, signOut } = authSlice.actions; 
export default authSlice.reducer;
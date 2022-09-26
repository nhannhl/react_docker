import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authApi from "../api/authApi";

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (payload, thunkAPI) => {
    const response = await authApi.registerUser(payload);
    return response;
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (payload, thunkAPI) => {
    const response = await authApi.userLogin(payload);
    return response.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    current: {}
  },
  reducers: {
    logout: (state, action) => {
      state.current = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.current = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.current = action.payload;
      });
  },
});

const { actions, reducer } = authSlice;
export const { logout } = actions;
export default reducer;

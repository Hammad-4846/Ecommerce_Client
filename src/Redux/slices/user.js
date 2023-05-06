import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Axios
import { axiosClient } from "../../utils/axios/axios";

export const getLoggedInrUser = createAsyncThunk(
  "/api/v1/auth/login",
  async (body) => {
    try {
      const response = await axiosClient.post("/api/v1/auth/login", body);
      console.log("This is Loggin Data", response);
      return response.data;
    } catch (e) {
      return Promise.reject(e);
    }
  }
);

export const createUser = createAsyncThunk(
  "/api/v1/auth/register",
  async (body) => {
    try {
      console.log("This is bOdy", body);
      const response = await axiosClient.post("/api/v1/auth/register", body);
      console.log("This is Response from our APi", response);
      return response.data;
    } catch (error) {
      return Promise.reject(error.message);
    }
  }
);

// User Slice
const userSlice = createSlice({
  name: "user",
  initialState: {
    status: false,
    user: {},
    isAuthenticated: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.user = action.payload.user;
        state.status = true;
        state.isAuthenticated = true;
      } else {
        state.error = action.payload.error ? "Error" : action.payload.error;
      }
    });
  },
});

const userReducer = userSlice.reducer;
export default userReducer;

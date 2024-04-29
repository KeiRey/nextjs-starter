import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axiosInstance";
let initialState = {
  exampApi: {
    data: [],
    isLoading: true,
  },
};

export const exampApi = createAsyncThunk(
  "exampApi",
  async (params = '', { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get('/photos', { params });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const StoreApi = createSlice({
  name: "starter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(exampApi.pending, (state) => {
        state.exampApi.isLoading = true;
      })
      .addCase(exampApi.fulfilled, (state, { payload }) => {
        state.exampApi.isLoading = false;
        state.exampApi.data = payload;
      })
      .addCase(exampApi.rejected, (state, { payload }) => {
        state.exampApi.isLoading = false;
        state.exampApi.data = payload;
      });

  },
});

export default StoreApi.reducer;

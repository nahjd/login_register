import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";

export const getAllProducts = createAsyncThunk<
  Array<object>,
  void,
  { state: UserStateTy }
>("/getProducts", async () => {
  const products = await axios("http://localhost:5000/users");

  return products.data;
});

export interface UserStateTy {
  [x: string]: any;
  products: object[];
  isLogin: boolean;
}

const initialState: UserStateTy = {
  products: [],
  isLogin: true,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = action.payload;
    },

    extraRedusers: (builder) => {
      builder.addCase(getAllProducts.pending, (state, action) => {
        state.loading = true;
      });
      builder.addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      });
      builder.addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;

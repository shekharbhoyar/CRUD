import { createSlice } from "@reduxjs/toolkit";
import { userlist } from "./data";

const userSlice = createSlice({
  name: "users",
  initialState: userlist,
  reducers: {
   
  },
});

export default userSlice.reducer;

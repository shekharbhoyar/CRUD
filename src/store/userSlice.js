import { createSlice } from "@reduxjs/toolkit";
import { userlist } from "./data";

const userSlice = createSlice({
  name: "users",
  initialState: userlist,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;

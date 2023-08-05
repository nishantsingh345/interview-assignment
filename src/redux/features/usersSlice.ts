import { createSlice } from "@reduxjs/toolkit";
const isClient = typeof window !== "undefined";
let usersData;
if (isClient) {
  const user = localStorage.getItem("user");
  usersData = user ? JSON?.parse(localStorage.getItem("user")) : "";
}
let usersDataDetail;
if (isClient) {
  const user = localStorage.getItem("user");
  usersDataDetail = user
    ? JSON?.parse(localStorage.getItem("usersDataDetail"))
    : "";
}

const initialState = {
  users: isClient ? usersData : [],
  user: isClient ? usersDataDetail : {},
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload.users;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    getUser: (state, action) => {
      const user = state.users?.filter(
        (item: any) => item.id === Number(action.payload)
      );

      state.user = { ...user[0] };
      localStorage.setItem("userDetail", JSON.stringify(action.payload));
    },
  },
});

export const { getUsers, getUser } = userSlice.actions;
export default userSlice.reducer;

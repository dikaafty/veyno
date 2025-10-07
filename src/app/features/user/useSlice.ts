import { createSlice } from "@reduxjs/toolkit"

type InitialState = {
  userFullname: string,
  userNickname: string,
  userProfession: string,
  isAuth: boolean,
}

const initialState: InitialState = {
  userFullname: "",
  userNickname: "",
  userProfession: "",
  isAuth: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserFullname: (state, action) => {
      state.userFullname = action.payload;
    },
    setUserNickname: (state, action) => {
      state.userNickname = action.payload;
    },
    setUserProfession: (state, action) => {
      state.userProfession = action.payload;
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  }
});

export const {
  setUserFullname, setUserNickname, setUserProfession, setIsAuth,
} = userSlice.actions;
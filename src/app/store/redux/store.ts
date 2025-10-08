import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/app/features/user/userSlice";
import transactionsReducer from "@/app/features/transactions/transactionsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    transactions: transactionsReducer,
  }
});
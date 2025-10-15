import { createSlice } from "@reduxjs/toolkit";
import { TransactionCategories } from "@/app/lib/types";

type Transaction = {
  id: string;
  type: "revenue" | "expense";
  amount: number;
  category: string;
  note?: string;
  date: string;
}

type InitialState = {
  revenue: Transaction[];
  expenses: Transaction[];
  transactions: Transaction[];
  selectedTransactions: Transaction | null;
}

const initialState: InitialState = {
  revenue: [],
  expenses: [],
  transactions: [],
  selectedTransactions: null,
}

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addRevenue: (state, action) => {
      state.revenue.push(action.payload);
    },
    editRevenue: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.revenue.findIndex(rev => rev.id === id);
      if(index !== -1) {
        state.revenue[index] = { ...state.revenue[index], ...updatedData }
      }
    },
    deleteRevenue: (state, action) => {
      state.revenue = state.revenue.filter(rev => rev.id !== action.payload);
    },
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    editExpense: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.expenses.findIndex(exp => exp.id === id);
      if(index !== -1) {
        state.expenses[index] = { ...state.expenses[index], ...updatedData }
      }
    },
    deleteExpense: (state, action) => {
      state.expenses = state.expenses.filter(exp => exp.id !== action.payload);
    },
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
    },
    editTransaction: (state, action) => {
      const { id, updatedData } = action.payload;
      const index = state.transactions.findIndex(tx => tx.id === id);
      if(index !== -1) {
        state.transactions[index] = { ...state.transactions[index], ...updatedData }
      }
    },
    deleteTransaction: (state, action) => {
      state.transactions = state.transactions.filter(tx => tx.id !== action.payload);
    },
    setSelectedTransaction: (state, action) => {
      state.transactions = action.payload;
    }
  }
});

export const {
  addRevenue, addExpense, addTransaction, editRevenue, editExpense, editTransaction,
  deleteRevenue, deleteExpense, deleteTransaction, setSelectedTransaction
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
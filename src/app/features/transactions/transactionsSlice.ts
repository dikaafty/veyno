import { createSlice } from "@reduxjs/toolkit";
import { TransactionCategories } from "@/lib/types";

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
  transactionCategories: TransactionCategories[];
}

const initialState: InitialState = {
  revenue: [],
  expenses: [],
  transactions: [],
  selectedTransactions: null,
  transactionCategories: [
    {
      id: "1",
      category: "Food & Drinks",
      image: "/images/food-drink-icon.png",
      percentage: 42,
    },
    {
      id: "2",
      category: "Transportation",
      image: "/images/transportation-icon.png",
      percentage: 10,
    },
    {
      id: "3",
      category: "Housing / Rent",
      image: "/images/rent-icon.png",
      percentage: 5,
    },
    {
      id: "4",
      category: "Bills & Subscriptions",
      image: "/images/bills-icon.png",
      percentage: 3,
    },
    {
      id: "5",
      category: "Shopping",
      image: "/images/shopping-icon.png",
      percentage: 7,
    },
    {
      id: "6",
      category: "Health & Fitness",
      image: "/images/health-fitness-icon.png",
      percentage: 2,
    },
    {
      id: "7",
      category: "Education",
      image: "/images/education-icon.png",
      percentage: 3,
    },
    {
      id: "8",
      category: "Entertainment",
      image: "/images/entertainment-icon.png",
      percentage: 12,
    },
    {
      id: "9",
      category: "Investments / Savings",
      image: "/images/investment-icon.png",
      percentage: 0,
    },
    {
      id: "10",
      category: "Gifts / Donations",
      image: "/images/gift-icon.png",
      percentage: 0,
    },
    {
      id: "11",
      category: "Insurance / Tax",
      image: "/images/tax-icon.png",
      percentage: 5,
    },
    {
      id: "12",
      category: "Other",
      image: "/images/other-icon.png",
      percentage: 1,
    },
  ],
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
    },
    editCategoryPercentage: (state, action) => {
      const { id, updatedPercentage } = action.payload;
      const index = state.transactionCategories.findIndex(txc => txc.id === id);
      if(index !== -1) {
        state.transactionCategories[index].percentage = updatedPercentage;
      }
    },
  }
});

export const {
  addRevenue, addExpense, addTransaction, editRevenue, editExpense, editTransaction,
  deleteRevenue, deleteExpense, deleteTransaction, setSelectedTransaction, 
  editCategoryPercentage,
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

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
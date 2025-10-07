type Transaction = {
  id: string;
  type: "revenue" | "expense";
  amount: number;
  category: string;
  note?: string;
  date: string;
}
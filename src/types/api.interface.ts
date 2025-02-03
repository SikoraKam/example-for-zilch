export interface Merchant {
  id: string;
  name: string;
}

export interface Transaction {
  id: string;
  amount: number;
  currency: string;
  date: string;
  status: "completed" | "pending" | "failed" | "refunded";
  description: string;
  paymentMethod: string;
  merchant: Merchant;
}

export type TransactionsResponse = Transaction[];

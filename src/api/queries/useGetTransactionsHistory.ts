import axios from "axios";

import { useCallback, useEffect, useState } from "react";
import { Transaction, TransactionsResponse } from "../../types/api.interface";
import { showToastError } from "../../helpers/toast";

const API_URL = "https://mocki.io/v1/2df33417-a890-4518-b46b-99a46ed62046";

export const fetchTransactions = async (): Promise<TransactionsResponse> => {
  try {
    const response = await axios.get<TransactionsResponse>(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw error;
  }
};

export const useGetTransactionsHistory = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const loadData = async () => {
    try {
      const data = await fetchTransactions();
      setTransactions(data);
    } catch (error: any) {
      showToastError(error ?? error.message ?? "Error fetching transactions");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadData();
  }, []);

  return { transactions, loading, onRefresh, refreshing };
};

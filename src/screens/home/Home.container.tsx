import { FC } from "react";
import { HomeScreen } from "./Home.screen";
import { useGetTransactionsHistory } from "../../api/queries/useGetTransactionsHistory";

export const Home: FC = () => {
  const { transactions, loading, onRefresh, refreshing } =
    useGetTransactionsHistory();

  return (
    <HomeScreen
      refreshing={refreshing}
      onRefresh={onRefresh}
      isLoading={loading}
      transactions={transactions}
    />
  );
};

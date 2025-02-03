import { FC, useMemo, useState } from "react";
import { useGetTransactionsHistory } from "../../api/queries/useGetTransactionsHistory";
import { HomeScreen } from "./Home.screen";

export const Home: FC = () => {
  const { transactions, loading, onRefresh, refreshing } =
    useGetTransactionsHistory();

  const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);
  const toggleCompletedTransactions = () =>
    setIsSwitchEnabled((previousState) => !previousState);

  const filteredTransactions = useMemo(() => {
    if (isSwitchEnabled) {
      return transactions.filter(
        (transaction) => transaction.status === "completed",
      );
    }
    return transactions;
  }, [isSwitchEnabled, transactions]);

  return (
    <HomeScreen
      displayOnlyCompleted={isSwitchEnabled}
      refreshing={refreshing}
      onRefresh={onRefresh}
      isLoading={loading}
      transactions={filteredTransactions}
      toggleCompletedTransactions={toggleCompletedTransactions}
    />
  );
};

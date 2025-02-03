import { Transaction } from "../../types/api.interface";

export interface HomeScreenProps {
  isLoading: boolean;
  transactions: Transaction[];
  refreshing: boolean;
  onRefresh(): void;
}

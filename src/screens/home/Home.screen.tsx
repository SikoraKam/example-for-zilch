import { FC, useCallback } from "react";
import { RefreshControl, Switch, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { TransactionCard } from "../../components/TransactionCard/TransactionCard";
import { ContentContainer } from "../../components/shared/ContentContainer/ContentContainer";
import { CustomText } from "../../components/shared/CustomText/CustomText";
import { Transaction } from "../../types/api.interface";
import { HomeScreenProps } from "./Home.interface";
import { appTheme } from "../../theme/theme";

export const HomeScreen: FC<HomeScreenProps> = ({
  isLoading,
  transactions,
  onRefresh,
  refreshing,
  displayOnlyCompleted,
  toggleCompletedTransactions,
}) => {
  const renderItem = useCallback(({ item }: { item: Transaction }) => {
    return <TransactionCard transaction={item} />;
  }, []);

  return (
    <ContentContainer
      withBackButton={false}
      className="px-0 bg-primaryContainer"
      safeAreaEdges={["left", "right", "bottom"]}
      isLoading={isLoading}
    >
      <View className="flex-row gap-5 items-center justify-center my-4">
        <Switch
          trackColor={{ false: appTheme.colors.primary, true: "#81b0ff" }}
          thumbColor={
            displayOnlyCompleted
              ? appTheme.colors.primary
              : appTheme.colors.surface
          }
          ios_backgroundColor={appTheme.colors.surface}
          onValueChange={toggleCompletedTransactions}
          value={displayOnlyCompleted}
        />
        <CustomText>Display only completed</CustomText>
      </View>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#4A90E2"
          />
        }
        ListEmptyComponent={() => (
          <View className="flex-1 justify-center items-center p-5">
            <CustomText>No transactions available</CustomText>
          </View>
        )}
      />
    </ContentContainer>
  );
};

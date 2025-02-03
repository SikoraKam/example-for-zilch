import { FC, useCallback, useState } from "react";
import { RefreshControl, View } from "react-native";
import { ContentContainer } from "../../components/shared/ContentContainer/ContentContainer";
import { HomeScreenProps } from "./Home.interface";
import { TransactionCard } from "../../components/TransactionCard/TransactionCard";
import { FlatList } from "react-native-gesture-handler";
import { Transaction } from "../../types/api.interface";
import { CustomText } from "../../components/shared/CustomText/CustomText";

export const HomeScreen: FC<HomeScreenProps> = ({
  isLoading,
  transactions,
  onRefresh,
  refreshing,
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

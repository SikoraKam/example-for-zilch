import React, { FC, PropsWithChildren } from "react";
import { View, Text } from "react-native";
import { CustomText } from "../shared/CustomText/CustomText";
import { TransactionCardProps } from "./TransactionCard.interface";

const Detail: FC<PropsWithChildren> = ({ children }) => (
  <CustomText size="sm" textClassName="flex-1 text-gray-800">
    {children}
  </CustomText>
);

const Row: FC<{ title: string; value: string | number }> = ({
  title,
  value,
}) => (
  <>
    <View className="flex-row mb-3 items-center">
      <CustomText
        size="sm"
        weight="medium"
        textClassName="w-24 font-medium text-gray-600"
      >
        {title}
      </CustomText>
      <Detail>{value}</Detail>
    </View>
  </>
);

export const TransactionCard: FC<TransactionCardProps> = ({ transaction }) => {
  let statusClass = "text-green-500";
  if (transaction.status === "pending") {
    statusClass = "text-yellow-500";
  } else if (transaction.status === "failed") {
    statusClass = "text-red-500";
  }

  return (
    <View className="m-4 rounded-xl bg-white shadow overflow-hidden">
      {/* Header Section */}
      <View className="bg-primary p-4">
        <Text className="text-white text-xl font-semibold">
          Transaction {transaction.id}
        </Text>
      </View>

      {/* Body Section */}
      <View className="p-4">
        <Row
          title="Amount:"
          value={`${transaction.amount} ${transaction.currency}`}
        />
        <Row
          title="Date:"
          value={new Date(transaction.date).toLocaleDateString()}
        />
        <View className="flex-row mb-3">
          <Text className="w-24 font-medium text-gray-600">Status:</Text>
          <Text className={`flex-1 font-medium ${statusClass}`}>
            {transaction.status.toUpperCase()}
          </Text>
        </View>
        <Row title="Description:" value={transaction.description} />
        <Row title="Method:" value={transaction.paymentMethod} />

        <Row title="Merchant:" value={transaction.merchant.name} />
      </View>
    </View>
  );
};

import { render } from "@testing-library/react-native";
import { InitializeTestProviders } from "../../test-utils/InitializeTestProviders";
import { Transaction } from "../../types/api.interface";
import { HomeScreen } from "./Home.screen";

const mockTransactions: Transaction[] = [
  {
    id: "1",
    status: "completed",
    amount: 100,
    currency: "$",
    date: "01/01/2025",
    description: "description",
    merchant: {
      id: "1",
      name: "name1",
    },
    paymentMethod: "card",
  },
  {
    id: "2",
    status: "pending",
    amount: 200,
    currency: "$",
    date: "01/01/2025",
    description: "description",
    merchant: {
      id: "2",
      name: "name2",
    },
    paymentMethod: "card",
  },
];

describe("HomeScreen", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <InitializeTestProviders>
        <HomeScreen
          isLoading={false}
          transactions={mockTransactions}
          onRefresh={jest.fn()}
          refreshing={false}
          displayOnlyCompleted={false}
          toggleCompletedTransactions={jest.fn()}
        />
      </InitializeTestProviders>,
    );
    expect(getByText("Display only completed")).toBeTruthy();
    expect(getByText("100 $")).toBeTruthy();
    expect(getByText("name1")).toBeTruthy();
  });

  it("shows empty message when there are no transactions", () => {
    const { getByText } = render(
      <InitializeTestProviders>
        <HomeScreen
          isLoading={false}
          transactions={[]}
          onRefresh={jest.fn()}
          refreshing={false}
          displayOnlyCompleted={false}
          toggleCompletedTransactions={jest.fn()}
        />
      </InitializeTestProviders>,
    );

    expect(getByText("No transactions available")).toBeTruthy();
  });
});

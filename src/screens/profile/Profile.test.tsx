import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { ProfileScreen } from "./Profile.screen";
import { InitializeTestProviders } from "../../test-utils/InitializeTestProviders";
import { CreditCardFormData } from "react-native-credit-card-input";
import { useAppStore } from "../../store/store";

jest.mock("../../store/store", () => ({
  useAppStore: jest.fn(),
}));

describe("ProfileScreen", () => {
  const mockSetFormData = jest.fn();
  const mockHandleSaveCreditCard = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const { getByText } = render(
      <InitializeTestProviders>
        <ProfileScreen
          setFormData={mockSetFormData}
          formData={
            { values: {}, status: {}, valid: false } as CreditCardFormData
          }
          handleSaveCreditCard={mockHandleSaveCreditCard}
        />
      </InitializeTestProviders>,
    );

    expect(getByText("Save")).toBeTruthy();
  });

  it("displays the credit card input", () => {
    const { getByText, getByPlaceholderText } = render(
      <InitializeTestProviders>
        <ProfileScreen
          setFormData={mockSetFormData}
          formData={
            { values: {}, status: {}, valid: false } as CreditCardFormData
          }
          handleSaveCreditCard={mockHandleSaveCreditCard}
        />
      </InitializeTestProviders>,
    );

    expect(getByText("Save")).toBeTruthy();
    expect(getByPlaceholderText("CVC")).toBeTruthy();
  });

  it("calls handleSaveCreditCard with valid data", async () => {
    const { getByText } = render(
      <InitializeTestProviders>
        <ProfileScreen
          setFormData={mockSetFormData}
          formData={
            {
              values: {
                number: "4111111111111111",
                expiry: "12/25",
                cvc: "123",
                type: "visa",
              },
              status: { number: "valid", expiry: "valid", cvc: "valid" },
              valid: true,
            } as CreditCardFormData
          }
          handleSaveCreditCard={mockHandleSaveCreditCard}
        />
      </InitializeTestProviders>,
    );

    fireEvent.press(getByText("Save"));

    await waitFor(() => {
      expect(mockHandleSaveCreditCard).toHaveBeenCalledTimes(1);
    });
  });

  it("shows Buy Premium prompt when user is not premium", async () => {
    (useAppStore as jest.Mock).mockReturnValueOnce({ premium: false });

    const { findByText } = render(
      <InitializeTestProviders>
        <ProfileScreen
          setFormData={mockSetFormData}
          formData={
            { values: {}, status: {}, valid: false } as CreditCardFormData
          }
          handleSaveCreditCard={mockHandleSaveCreditCard}
        />
      </InitializeTestProviders>,
    );

    await waitFor(() => {
      expect(findByText("Buy Premium")).toBeTruthy();
    });
  });

  it("does not show Buy Premium prompt when user is premium", () => {
    (useAppStore as jest.Mock).mockReturnValueOnce({ premium: true });

    const { queryByText } = render(
      <InitializeTestProviders>
        <ProfileScreen
          setFormData={mockSetFormData}
          formData={
            { values: {}, status: {}, valid: false } as CreditCardFormData
          }
          handleSaveCreditCard={mockHandleSaveCreditCard}
        />
      </InitializeTestProviders>,
    );

    expect(queryByText("Buy Premium")).toBeNull();
  });
});

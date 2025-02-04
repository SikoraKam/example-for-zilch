import AsyncStorage from "@react-native-async-storage/async-storage";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { useForm } from "react-hook-form";
import { InitializeTestProviders } from "../../../test-utils/InitializeTestProviders";
import { Login } from "./Login.container";
import { LoginScreen } from "./Login.screen";

type FormValues = {
  email: string;
  password: string;
};

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
}));

describe("LoginScreen Test", () => {
  it("renders correctly", () => {
    const TestComponent = () => {
      const { control, handleSubmit, formState } = useForm<FormValues>();
      return (
        <LoginScreen
          control={control}
          handleSubmit={handleSubmit}
          errors={formState.errors}
          onSubmit={jest.fn()}
        />
      );
    };

    const { toJSON } = render(
      <InitializeTestProviders>
        <TestComponent />
      </InitializeTestProviders>,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  const LoginContainer = () => (
    <InitializeTestProviders>
      <Login />
    </InitializeTestProviders>
  );
  it("displays validation errors on invalid input", async () => {
    const { getByPlaceholderText, getByText } = render(<LoginContainer />);

    fireEvent.changeText(getByPlaceholderText("E-mail"), "invalidemail");
    fireEvent.changeText(getByPlaceholderText("Password"), "123");
    fireEvent.press(getByText("Log in"));

    await waitFor(() => {
      expect(getByText("email must be a valid email")).toBeTruthy();
      expect(getByText("password must be at least 5 characters")).toBeTruthy();
    });
  });

  it("calls onSubmit with correct data", async () => {
    const { getByPlaceholderText, getByText } = render(<LoginContainer />);

    fireEvent.changeText(getByPlaceholderText("E-mail"), "test@example.com");
    fireEvent.changeText(getByPlaceholderText("Password"), "password123");
    fireEvent.press(getByText("Log in"));

    await waitFor(() => {
      expect(AsyncStorage.setItem).toHaveBeenCalledWith(
        "user",
        JSON.stringify({ username: "John" }),
      );
    });
  });
});

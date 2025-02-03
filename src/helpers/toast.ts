import Toast from "react-native-toast-message";

export const showToastError = (message?: string) => {
  Toast.show({ type: "error", text1: message ?? "Something went wrong" });
};

export const showToastSuccess = (message: string) => {
  Toast.show({ type: "success", text1: message });
};

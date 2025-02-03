import Toast from "react-native-toast-message";
import "./global.css";
import { AppContainer } from "./src/AppContainer";

export default function App() {
  return (
    <>
      <AppContainer />
      <Toast />
    </>
  );
}

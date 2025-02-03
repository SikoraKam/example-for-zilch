import { CreditCardFormData } from "react-native-credit-card-input";

export interface ProfileScreenProps {
  setFormData(form: CreditCardFormData): void;
  formData: CreditCardFormData | undefined;
  handleSaveCreditCard(): void;
}

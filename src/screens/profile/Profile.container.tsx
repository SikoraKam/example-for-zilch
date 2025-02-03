import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { FC, useLayoutEffect, useState } from "react";
import { CreditCardFormData } from "react-native-credit-card-input";
import { CustomButton } from "../../components/shared/CustomButton/CustomButton";
import { showToastError, showToastSuccess } from "../../helpers/toast";
import { DrawerParamList } from "../../router/DrawerNavigator";
import { useAppStore } from "../../store/store";
import { ProfileScreen } from "./Profile.screen";

export const Profile: FC = () => {
  const [formData, setFormData] = useState<CreditCardFormData>();
  const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();
  const resetStore = useAppStore((state) => state.resetStore);

  useLayoutEffect(() => {
    navigation?.setOptions({
      headerRight: () => (
        <CustomButton
          className="bg-white border-0 py-1"
          textClassName="text-onSurface"
          onPress={resetStore}
        >
          Logout
        </CustomButton>
      ),
    });
  }, [navigation, resetStore]);

  const handleSaveCreditCard = () => {
    if (formData?.valid) {
      showToastSuccess("HERE SHOULD BE API CALL FOR SAVING CARD");
    } else {
      console.warn(formData?.status);
      showToastError("Invalid card");
    }
  };

  return (
    <ProfileScreen
      handleSaveCreditCard={handleSaveCreditCard}
      formData={formData}
      setFormData={setFormData}
    />
  );
};

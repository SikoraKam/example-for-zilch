import { FC, useState } from "react";
import { Text } from "react-native";
import {
  CreditCardFormField,
  CreditCardInput,
  CreditCardView,
} from "react-native-credit-card-input";
import { ContentContainer } from "../../components/shared/ContentContainer/ContentContainer";
import { ProfileScreenProps } from "./Profile.interface";
import { CustomButton } from "../../components/shared/CustomButton/CustomButton";
import { BuyPremium } from "../../components/BuyPremium/BuyPremium";

export const ProfileScreen: FC<ProfileScreenProps> = ({
  setFormData,
  formData,
  handleSaveCreditCard,
}) => {
  const [focusedField, setFocusedField] = useState<CreditCardFormField>();

  return (
    <ContentContainer
      withScroll
      withBackButton={false}
      safeAreaEdges={["bottom"]}
    >
      <CreditCardView
        focusedField={focusedField}
        style={{ alignSelf: "center", marginTop: 15 }}
        type={formData?.values.type}
        number={formData?.values.number}
        expiry={formData?.values.expiry}
        cvc={formData?.values.cvc}
      />
      <CreditCardInput onFocusField={setFocusedField} onChange={setFormData} />

      <CustomButton onPress={handleSaveCreditCard} className="my-4">
        Save
      </CustomButton>
      <BuyPremium>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          pulvinar diam et vehicula condimentum. Maecenas placerat odio ut
          tristique ultricies. Suspendisse a mollis erat. Quisque nec nisl sit
          amet ante ullamcorper mollis aliquet finibus nisl. Suspendisse porta
          erat imperdiet purus iaculis, mattis sodales dui egestas. Integer eu
          tellus a ex malesuada laoreet. Aenean vitae sollicitudin purus.
          Suspendisse augue lectus, vestibulum sit amet dapibus sit amet, mollis
          eu neque. Aliquam volutpat auctor tortor, id fringilla dui. Donec
          vehicula id elit at congue. Pellentesque luctus urna maximus lorem
          dignissim sodales. Sed semper lobortis eros, eu pretium mauris
          tincidunt vel. Maecenas quis congue turpis, non varius massa. Mauris
          sagittis velit malesuada, tincidunt tortor sit amet, vehicula mi.
          Suspendisse at ipsum ut arcu mollis porttitor. Ut eget dictum ligula,
          sit amet efficitur massa. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae; Maecenas lacus mi,
          aliquet id vulputate non, semper ac nisl. Donec scelerisque tortor
          eget elit hendrerit efficitur. Integer nec lacus porttitor libero
          euismod elementum. Donec sit amet neque eget est ultrices facilisis a
          vel nisl. Vestibulum pulvinar risus id arcu convallis, nec consectetur
          dolor luctus.
        </Text>
      </BuyPremium>
    </ContentContainer>
  );
};

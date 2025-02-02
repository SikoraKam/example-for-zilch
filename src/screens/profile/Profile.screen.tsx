import { FC } from "react";
import { View } from "react-native";
import { ContentContainer } from "../../components/shared/ContentContainer/ContentContainer";
import { ProfileScreenProps } from "./Profile.interface";

export const ProfileScreen: FC<ProfileScreenProps> = ({}) => {
  return (
    <ContentContainer withBackButton={false} safeAreaEdges={["bottom"]}>
      <View />
    </ContentContainer>
  );
};

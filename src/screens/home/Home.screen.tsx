import { FC } from "react";
import { View } from "react-native";
import { ContentContainer } from "../../components/shared/ContentContainer/ContentContainer";
import { HomeScreenProps } from "./Home.interface";

export const HomeScreen: FC<HomeScreenProps> = ({}) => {
  return (
    <ContentContainer
      withBackButton={false}
      className="px-0 bg-primary"
      safeAreaEdges={["left", "right", "bottom"]}
    >
      <View />
    </ContentContainer>
  );
};

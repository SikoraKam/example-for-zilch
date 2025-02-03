import React, { FC } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ErrorView } from "../ErrorView/ErrorView";
import { Header } from "../Header/Header";
import { LoadingIndicator } from "../LoadingIndicator/LoadingIndicator";
import { ContentContainerInterface } from "./ContentContainer.interface";
import { ContentInsideContainer } from "./ContentInsideContainer";

export const ContentContainer: FC<ContentContainerInterface> = ({
  className,
  title,
  withHeader = true,
  children,
  withBackButton = true,
  backButtonBehaviour,
  isLoading,
  noPadding = false,
  withScroll,
  contentContainerClassname,
  error = undefined,
  safeAreaEdges = ["top", "bottom", "right", "left"],
}) => {
  const getChildrenComponent = () => {
    if (error) return <ErrorView />;

    if (isLoading) return <LoadingIndicator fillContainer />;

    return children;
  };

  return (
    <SafeAreaView
      className={`flex-1 bg-background px-4 ${className}`}
      edges={safeAreaEdges}
    >
      {withHeader && (
        <Header
          backNavigationFunction={backButtonBehaviour}
          withBackButton={withBackButton}
          title={title}
          textClassName="px-4 sm:px-6"
        />
      )}
      <ContentInsideContainer
        {...{
          contentContainerClassname,
          isLoading,
          noPadding,
          withScroll,
        }}
      >
        {getChildrenComponent()}
      </ContentInsideContainer>

      {!withScroll && <View className="pb-3" />}
    </SafeAreaView>
  );
};

import React, { FC } from "react";

import { KeyboardAvoidingScrollView } from "../KeyboardAvoidingScrollView";
import { ContentInsideContainerProps } from "./ContentInsideContainer.interface";

export const ContentInsideContainer: FC<ContentInsideContainerProps> = ({
  children,
  contentContainerClassname,
  withScroll,
  isLoading,
}) => {
  const contentContainerStyle = `
    flex-1,
    ${contentContainerClassname},
  `;

  if (withScroll && !isLoading) {
    return (
      <KeyboardAvoidingScrollView
        keyboardAvoidingViewClassname={contentContainerStyle}
      >
        {children}
      </KeyboardAvoidingScrollView>
    );
  }
  return <>{children}</>;
};

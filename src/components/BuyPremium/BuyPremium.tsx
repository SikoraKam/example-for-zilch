import { FC, PropsWithChildren, useEffect } from "react";
import { Dimensions, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useAppStore } from "../../store/store";
import { CustomButton } from "../shared/CustomButton/CustomButton";
import { CustomText } from "../shared/CustomText/CustomText";

const { height } = Dimensions.get("window");

export const BuyPremium: FC<PropsWithChildren> = ({ children }) => {
  const translateY = useSharedValue(height);
  const opacity = useSharedValue(0);
  const premium = useAppStore((state) => state.premium);

  useEffect(() => {
    translateY.value = withTiming(0, {
      duration: 800,
      easing: Easing.out(Easing.cubic),
    });
    opacity.value = withTiming(1, {
      duration: 800,
      easing: Easing.out(Easing.cubic),
    });
  }, [opacity, translateY]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));

  return (
    <View className="flex-1 bg-gray-100 justify-center items-center">
      {!premium && (
        <Animated.View
          style={animatedStyle}
          className="absolute top-10 z-10 w-[85%] p-5 bg-white rounded-xl items-center shadow-md"
        >
          <CustomText size="2xl" weight="semibold" textClassName="mb-3">
            Go Premium!
          </CustomText>
          <CustomText textClassName="text-base text-center mb-5 text-gray-600">
            Unlock all features and enjoy an ad-free experience by upgrading to
            our premium plan.
          </CustomText>
          <CustomButton className="bg-secondary border-0">
            Buy Premium
          </CustomButton>
        </Animated.View>
      )}

      <View
        className={`${premium ? "opacity-100" : "opacity-10 max-h-96"} mt-4 `}
      >
        {children}
      </View>
    </View>
  );
};

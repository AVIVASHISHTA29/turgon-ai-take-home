// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { useThemeColor } from "@/hooks/useThemeColor";
import Ionicons from "@expo/vector-icons/Ionicons";
import { type ComponentProps } from "react";

type TabBarIconProps = Omit<ComponentProps<typeof Ionicons>, "name"> & {
  name: ComponentProps<typeof Ionicons>["name"];
};

export function ThemedIcon({ style, ...rest }: TabBarIconProps) {
  const iconColor = useThemeColor({}, "icon");
  return <Ionicons size={28} style={[{ color: iconColor }, style]} {...rest} />;
}

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from "@expo/vector-icons/Ionicons";
import { type ComponentProps } from "react";

type TabBarIconProps = Omit<ComponentProps<typeof Ionicons>, "name"> & {
  name: ComponentProps<typeof Ionicons>["name"];
};

export function TabBarIcon({ style, ...rest }: TabBarIconProps) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}

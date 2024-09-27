import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { TabHeader } from "@/components/tabs/TabHeader";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons"; // For dropdown and search icons
import { Tabs } from "expo-router";
import React, { ComponentProps } from "react";

const tabScreens: Array<{
  name: string;
  title: string;
  iconFocused: ComponentProps<typeof Ionicons>["name"];
  iconUnfocused: ComponentProps<typeof Ionicons>["name"];
}> = [
  {
    name: "index",
    title: "Home",
    iconFocused: "home",
    iconUnfocused: "home-outline",
  },
  {
    name: "events",
    title: "Events",
    iconFocused: "storefront",
    iconUnfocused: "storefront-outline",
  },
  {
    name: "q-wallet",
    title: "QWallet",
    iconFocused: "wallet",
    iconUnfocused: "wallet-outline",
  },
  {
    name: "reserve",
    title: "Reserve",
    iconFocused: "bookmark",
    iconUnfocused: "bookmark-outline",
  },
  {
    name: "profile",
    title: "Profile",
    iconFocused: "person",
    iconUnfocused: "person-outline",
  },
];

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        header: () => <TabHeader />,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 8,
        },
        tabBarStyle: {
          height: 84,
          backgroundColor: Colors[colorScheme ?? "light"].background,
          padding: 4,
        },
      }}
    >
      {tabScreens.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                name={focused ? tab.iconFocused : tab.iconUnfocused}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}

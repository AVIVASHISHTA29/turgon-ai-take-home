import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export const TabHeader = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 16,
          paddingVertical: 20,
          backgroundColor: Colors[colorScheme ?? "light"].background,
          borderBottomWidth: 0.5,
          borderBottomColor: Colors[colorScheme ?? "light"].borderColor,
        }}
      >
        <TouchableOpacity onPress={() => alert("Dropdown clicked!")}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: Colors[colorScheme ?? "light"].text,
              }}
            >
              Q-Gurgaon
            </Text>
            <Ionicons
              name="chevron-down"
              size={18}
              style={{
                marginLeft: 4,
                color: Colors[colorScheme ?? "light"].text,
              }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Search clicked!")}>
          <Ionicons
            name="search"
            size={22}
            style={{
              color: Colors[colorScheme ?? "light"].text,
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

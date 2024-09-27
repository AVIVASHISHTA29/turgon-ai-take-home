import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaView, StyleSheet, TouchableOpacity } from "react-native";
import { ThemedIcon } from "../common/ThemedIcon";
import { ThemedText } from "../common/ThemedText";
import { ThemedView } from "../common/ThemedView";

export const TabHeader = () => {
  const colorScheme = useColorScheme();
  return (
    <SafeAreaView>
      <ThemedView style={styles.header}>
        <TouchableOpacity onPress={() => alert("Dropdown clicked!")}>
          <ThemedView style={{ flexDirection: "row", alignItems: "center" }}>
            <ThemedText
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              Q-Gurgaon
            </ThemedText>
            <ThemedIcon
              name="chevron-down"
              size={18}
              style={{
                marginLeft: 4,
              }}
            />
          </ThemedView>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Search clicked!")}>
          <ThemedIcon name="search" size={22} />
        </TouchableOpacity>
      </ThemedView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    paddingVertical: 20,
    borderBottomWidth: 0.5,
  },
});

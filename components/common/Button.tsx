import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

function Button({
  text,
  onClick,
  style,
}: {
  text: string;
  onClick: () => void;
  style?: any;
}) {
  const theme = useColorScheme() ?? "light";
  return (
    <TouchableOpacity onPress={onClick} style={style}>
      <ThemedView
        style={[
          theme === "light" ? styles.buttonLight : styles.buttonDark,
          style,
        ]}
      >
        <ThemedText
          style={theme === "light" ? styles.textLight : styles.textDark}
        >
          {text}
        </ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  buttonDark: {
    backgroundColor: Colors.light.background,
    padding: 6,
    borderRadius: 8,
    width: "100%",
  },
  buttonLight: {
    backgroundColor: Colors.dark.background,
    padding: 6,
    borderRadius: 8,
    width: "100%",
  },
  textLight: {
    color: Colors.dark.text,
    textAlign: "center",
  },
  textDark: {
    color: Colors.light.text,
    textAlign: "center",
  },
});

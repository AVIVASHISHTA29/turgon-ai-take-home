import { cards } from "@/constants/home/homeData";
import React from "react";
import { StyleSheet } from "react-native";
import { ThemedView } from "../common/ThemedView";
import Cards from "./Cards";

export default function CardsContainer() {
  return (
    <ThemedView style={styles.flexContainer}>
      {cards.map((card, i) => (
        <Cards {...card} key={`card-${i}`} />
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 18,
    marginVertical: 16,
  },
});

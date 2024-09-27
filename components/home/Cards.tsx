import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { Image, StyleSheet } from "react-native";
import { ThemedText } from "../common/ThemedText";
import { ThemedView } from "../common/ThemedView";

export interface CardsInterface {
  heading: string;
  desc: string;
  imgSrc: string;
}
export default function Cards({ heading, desc, imgSrc }: CardsInterface) {
  const borderColor = useThemeColor({}, "borderColor");

  return (
    <ThemedView style={[styles.cardContainer, { borderColor }]}>
      <Image
        source={{
          uri: imgSrc,
        }}
        style={styles.image}
      />
      <ThemedView style={styles.innerCard}>
        <ThemedText type="defaultSemiBold">{heading}</ThemedText>
        <ThemedText type="default" numberOfLines={2} ellipsizeMode="tail">
          {desc}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  cardContainer: {
    flex: 1,
    minWidth: "40%",
    minHeight: 200,
    borderRadius: 10,
    borderWidth: 1,
    gap: 4,
  },
  innerCard: {
    padding: 8,
  },
});

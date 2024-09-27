import { Colors } from "@/constants/Colors";
import * as React from "react";
import { useState } from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import Dots from "react-native-dots-pagination";
import Carousel from "react-native-reanimated-carousel";
import { ThemedView } from "./ThemedView";

export default function ImageCarousel({ data }: { data: Array<string> }) {
  const width = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <ThemedView style={styles.container}>
      <Carousel
        loop
        width={width}
        autoPlay={true}
        autoPlayInterval={3000}
        data={data}
        scrollAnimationDuration={1000}
        onSnapToItem={(index: number) => setActiveIndex(index)}
        renderItem={({ index }: { index: number }) => (
          <Image source={{ uri: data[index] }} style={styles.imageContainer} />
        )}
        pagingEnabled={true}
      />
      <ThemedView style={styles.dotContainer}>
        <Dots
          length={data.length}
          active={activeIndex}
          activeColor={Colors["dark"].text}
          passiveColor={Colors["dark"].tabIconDefault}
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  dotContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
});

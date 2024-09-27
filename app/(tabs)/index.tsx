import { StyleSheet } from "react-native";

import ImageCarousel from "@/components/common/ImageCarousel";
import ParallaxScrollView from "@/components/common/ParallaxScrollView";
import { ThemedText } from "@/components/common/ThemedText";
import { ThemedView } from "@/components/common/ThemedView";
import CardsContainer from "@/components/home/CardsContainer";
import { images } from "@/constants/home/homeData";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={<ImageCarousel data={images} />}
    >
      <ThemedView style={styles.parentContainer}>
        <ThemedText type="title">India Of Ideas!</ThemedText>
        <CardsContainer />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    width: "100%",
  },
});

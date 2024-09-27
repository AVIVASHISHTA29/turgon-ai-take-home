import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import Carousel from "react-native-snap-carousel";

const { width } = Dimensions.get("window");

const images = [
  "https://via.placeholder.com/400x300/FF0000/FFFFFF?text=Image1",
  "https://via.placeholder.com/400x300/00FF00/FFFFFF?text=Image2",
  "https://via.placeholder.com/400x300/0000FF/FFFFFF?text=Image3",
  "https://via.placeholder.com/400x300/FFFF00/FFFFFF?text=Image4",
  "https://via.placeholder.com/400x300/FF00FF/FFFFFF?text=Image5",
];

export default function HomeCarousel() {
  const renderItem = ({ item }: { item: string }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />
    </View>
  );

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width}
        layout={"default"}
        autoplay={true}
        loop={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 50,
  },
  imageContainer: {
    width: width,
    height: width * 0.6,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

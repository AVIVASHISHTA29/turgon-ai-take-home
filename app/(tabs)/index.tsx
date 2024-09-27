import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { FloatingAction } from "react-native-floating-action";

import ImageCarousel from "@/components/common/ImageCarousel";
import ParallaxScrollView from "@/components/common/ParallaxScrollView";
import { ThemedIcon } from "@/components/common/ThemedIcon";
import { ThemedText } from "@/components/common/ThemedText";
import { ThemedView } from "@/components/common/ThemedView";
import CardsContainer from "@/components/home/CardsContainer";
import QRModal from "@/components/home/QRModal";
import { Colors } from "@/constants/Colors";
import { images } from "@/constants/home/homeData";

enum ActionButtonEnum {
  QR_ACTION_BUTTON = "QR_ACTION_BUTTON",
}

const actions = [
  {
    text: "Open QR Code",
    icon: (
      <ThemedIcon
        name="qr-code"
        size={24}
        style={{
          color: Colors.dark.text,
        }}
      />
    ),
    name: ActionButtonEnum.QR_ACTION_BUTTON,
    position: 1,
    color: Colors.dark.background,
    buttonSize: 50,
  },
];

export default function HomeScreen() {
  const [qrModalVisible, setQrModalVisible] = useState<boolean>(false);

  const toggleQrModal = (): void => {
    setQrModalVisible(!qrModalVisible);
  };

  const actionPress = (name: string | undefined): void => {
    switch (name) {
      case ActionButtonEnum.QR_ACTION_BUTTON:
        toggleQrModal();
        break;
      default:
        break;
    }
  };

  return (
    <>
      <ParallaxScrollView
        headerBackgroundColor={{
          light: Colors.light.background,
          dark: Colors.dark.background,
        }}
        headerImage={<ImageCarousel data={images} />}
      >
        <ThemedView style={styles.parentContainer}>
          <ThemedText type="title">India Of Ideas!</ThemedText>
          <CardsContainer />
        </ThemedView>
      </ParallaxScrollView>
      <FloatingAction
        actions={actions}
        onPressItem={(name) => actionPress(name)}
        position="right"
        color={Colors.dark.background}
      />
      <QRModal visible={qrModalVisible} toggleModal={toggleQrModal} />
    </>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    width: "100%",
  },
});

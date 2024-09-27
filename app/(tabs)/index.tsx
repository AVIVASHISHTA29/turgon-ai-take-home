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
export default function HomeScreen() {
  const [qrModalVisible, setQrModalVisible] = useState(false);

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

  const toggleQrModal = () => {
    setQrModalVisible(!qrModalVisible);
  };

  const actionPress = (name: string | undefined) => {
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
        headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
        headerImage={<ImageCarousel data={images} />}
      >
        <ThemedView style={styles.parentContainer}>
          <ThemedText type="title">India Of Ideas!</ThemedText>
          <CardsContainer />
        </ThemedView>
      </ParallaxScrollView>

      {/* Floating Action Button */}
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

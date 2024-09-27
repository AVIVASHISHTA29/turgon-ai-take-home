import React, { useCallback, useState } from "react";
import { StyleSheet, useColorScheme } from "react-native";
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
import { ActionButtonEnum } from "@/enums/ActionButton";

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
  const colorScheme = useColorScheme() ?? "light";
  const [qrModalVisible, setQrModalVisible] = useState<boolean>(false);

  const toggleQrModal = (): void => {
    setQrModalVisible(!qrModalVisible);
  };

  const actionPress = useCallback((name: string | undefined): void => {
    switch (name) {
      case ActionButtonEnum.QR_ACTION_BUTTON:
        toggleQrModal();
        break;
      default:
        break;
    }
  }, []);

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
        color={Colors[colorScheme].text}
        floatingIcon={
          <ThemedIcon
            name="add"
            size={24}
            style={{ color: Colors[colorScheme].background }}
          />
        }
        overlayColor="rgba(0, 0, 0, 0.7)"
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

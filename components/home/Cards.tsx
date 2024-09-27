import { useThemeColor } from "@/hooks/useThemeColor";
import React, { useState } from "react";
import { Image, Modal, Pressable, StyleSheet } from "react-native";
import Button from "../common/Button";
import { ThemedText } from "../common/ThemedText";
import { ThemedView } from "../common/ThemedView";

export interface CardsInterface {
  heading: string;
  desc: string;
  imgSrc: string;
}

const CardContent = ({
  heading,
  desc,
  imgSrc,
}: CardsInterface): JSX.Element => (
  <ThemedView>
    <Image source={{ uri: imgSrc }} style={styles.image} />
    <ThemedView style={styles.innerCard}>
      <ThemedText type="defaultSemiBold">{heading}</ThemedText>
      <ThemedText type="default" numberOfLines={2} ellipsizeMode="tail">
        {desc}
      </ThemedText>
    </ThemedView>
  </ThemedView>
);

const Cards = ({ heading, desc, imgSrc }: CardsInterface): JSX.Element => {
  const borderColor = useThemeColor({}, "borderColor");
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => setModalVisible(!modalVisible);

  return (
    <>
      <Pressable
        onPress={toggleModal}
        style={[styles.cardContainer, { borderColor }]}
      >
        <CardContent heading={heading} desc={desc} imgSrc={imgSrc} />
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}
      >
        <ThemedView style={styles.modalContainer}>
          <ThemedView style={styles.modalContent}>
            <Image source={{ uri: imgSrc }} style={styles.modalImage} />
            <ThemedView style={styles.innerCard}>
              <ThemedText type="subtitle">{heading}</ThemedText>
              <ThemedText type="default">{desc}</ThemedText>
              <Button text="Close" onClick={toggleModal} />
            </ThemedView>
          </ThemedView>
        </ThemedView>
      </Modal>
    </>
  );
};

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
    gap: 6,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  modalImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
});

export default Cards;

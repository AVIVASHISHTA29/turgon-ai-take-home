import React from "react";
import { Modal, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Button from "../common/Button";
import { ThemedText } from "../common/ThemedText";
import { ThemedView } from "../common/ThemedView";

interface QRModalInterface {
  visible: boolean;
  toggleModal: () => void;
}

const QRModal = ({ visible, toggleModal }: QRModalInterface): JSX.Element => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={toggleModal}
    >
      <ThemedView style={styles.modalBackground}>
        <ThemedView style={styles.modalContainer}>
          <QRCode value="https://www.avivashishta.com" size={200} />
          <ThemedText type="subtitle">Visit My Portfolio</ThemedText>
          <Button
            text="Close"
            onClick={toggleModal}
            style={{ width: "100%" }}
          />
        </ThemedView>
      </ThemedView>
    </Modal>
  );
};

export default QRModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "80%",
    padding: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
  },
});

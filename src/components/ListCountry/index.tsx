import React, { useState } from "react";
import { Alert, Modal, ModalProps, Text, TouchableOpacity, View } from "react-native";
import { BoxCountry } from "../BoxCountry";


type Props = {
  visible: boolean;
}

export function ListCountry(Props: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={Props.visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          !Props.visible;
        }}
      >
        <Text>Teste de lista</Text>
      </Modal>
    </View>
  );
}
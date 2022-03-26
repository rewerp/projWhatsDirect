import React, { useState } from "react";
import { Alert, Modal, ModalProps, Text, TouchableOpacity, View } from "react-native";
import { BoxCountry } from "../BoxCountry";


export function ListCountry(Props: ModalProps) {
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
        <BoxCountry 
          title="(+55) Brazil" 
          onPress={() => alert('teste')} 
        />
      </Modal>
    </View>
  );
}
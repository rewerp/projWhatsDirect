import React from "react";
import { ButtonProps, Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from '../BoxCountry/styles';

import BrazilFlag from '../../assets/flags/brazil.png';


export function BoxCountry(Props: ButtonProps) {
  return (
    <View>
      <TouchableOpacity
        style={styles.boxCountry}
        onPress={Props.onPress}
      >
        <Image
          source={BrazilFlag}
          style={styles.imageCountry}
        />
        <Text style={styles.textCountry} >
          (+55) Brazil
        </Text>
      </TouchableOpacity>
    </View>
  );
}
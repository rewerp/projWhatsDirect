import React from "react";
import { ButtonProps, Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from '../BoxCountry/styles';

import BrazilFlag from '../../assets/flags/brazil.png';


export function BoxCountry({ onPress, title, ...rest }: ButtonProps) {
  return (
    <View>
      <TouchableOpacity
        style={styles.boxCountry}
        {...rest}
      >
        <Image
          source={BrazilFlag}
          style={styles.imageCountry}
        />
        <Text style={styles.textCountry} >
          {title}
          (+55) Brazil
        </Text>
      </TouchableOpacity>
    </View>
  );
}
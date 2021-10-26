import React, { useState } from 'react';
import {
   View, Text, TextInput, TouchableOpacity,
   Image, Linking, ScrollView
} from 'react-native';

import { styles } from './styles';

import Logo from '../../assets/images/logoMain.png';

function handleSendMessage(number: string) {
   if (number) {
      Linking.openURL(`https://wa.me/55 ${number}`)
   }
}

export function Main() {
   const [number, setNumber] = useState('');

   return (
      <ScrollView contentContainerStyle={styles.scrollView} >
         <View style={styles.container}>
            <View style={styles.contents} >
               <Image
                  source={Logo}
                  style={styles.logo}
               />
               <View style={styles.form} >
                  <TextInput
                     placeholder="Digite o número"
                     keyboardType="phone-pad"
                     maxLength={parseInt("11")}
                     textContentType="telephoneNumber"
                     style={styles.textInput}
                     onChangeText={setNumber}
                  />
                  <TouchableOpacity
                     style={styles.button}
                     onPress={() => handleSendMessage(number)}
                  >
                     <Text style={styles.buttonText} >
                        Iniciar conversa
                     </Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
      </ScrollView>
   )
}
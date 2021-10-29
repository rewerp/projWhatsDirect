import React, { useState } from 'react';
import {
   View, Text, TextInput, TouchableOpacity,
   Image, Linking, ScrollView, TouchableWithoutFeedbackBase
} from 'react-native';

import { styles } from './styles';

import Logo from '../../assets/images/logoMain.png';
import BrazilFlag from '../../assets/flags/brazil.png';
import { TextInputMask } from 'react-native-masked-text';

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
                  <TouchableOpacity style={styles.boxCountry} >
                     <Image 
                        source={BrazilFlag}
                        style={styles.imageContry} 
                     />
                     <Text style={styles.textCountry} > 
                        (+55) Brazil
                     </Text>
                  </TouchableOpacity>
                  <TextInput
                     placeholder="Digite o número"
                     keyboardType="phone-pad"
                     maxLength={parseInt("11")}
                     textContentType="telephoneNumber"
                     style={styles.textInput}
                     onChangeText={setNumber}
                     clearButtonMode="while-editing"
                  />
                  {/* <TextInputMask /> */}
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
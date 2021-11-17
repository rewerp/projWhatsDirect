import React, { useRef, useState } from 'react';
import {
   View, Text, TouchableOpacity,
   Image, Linking, ScrollView,
} from 'react-native';

import { styles } from './styles';

import Logo from '../../assets/images/logoMain.png';
import BrazilFlag from '../../assets/flags/brazil.png';
import { TextInputMask } from 'react-native-masked-text';

const countryCode = '55';

function handleSendMessage(phoneNumber: string) {
   if (phoneNumber) {
      alert(countryCode)
      Linking.openURL(`https://wa.me/ ${countryCode} ${phoneNumber}`)
   }
}

export function Main() {
   const [phoneNumber, setPhoneNumber] = useState('');

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
                  <TextInputMask
                     style={styles.textInput}
                     placeholder="Digite o número"
                     clearButtonMode="while-editing"
                     keyboardType="phone-pad"
                     type={'cel-phone'}
                     options={{
                        format: '(99) 99999-9999'
                     }}
                     value={phoneNumber}
                     onChangeText={setPhoneNumber}
                  />
                  <TouchableOpacity
                     style={styles.button}
                     onPress={() => handleSendMessage(phoneNumber)}
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
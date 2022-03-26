import React, { useRef, useState } from 'react';
import {
   View, Text, TouchableOpacity, Image, Linking, ScrollView, Alert, Modal
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import { BoxCountry } from '../../components/BoxCountry';
import { ListCountry } from '../../components/ListCountry';

import { styles } from './styles';
import Logo from '../../assets/images/logoMain.png';


export function Main() {
   const [phoneNumber, setPhoneNumber] = useState('');
   const [modalVisible, setModalVisible] = useState(false);
   const [countryCode, setCountryCode] = useState('55');

   function handleSendMessage(phoneNumber: string) {
      if (phoneNumber) {
         Linking.openURL(`https://wa.me/${countryCode}${phoneNumber}`)
      }
   }

   function renderListCountry(visible: boolean) {
      return (
         <ListCountry 
            visible={true}
         />
      );
   }

   return (
      <ScrollView contentContainerStyle={styles.scrollView} >
         <View style={styles.container}>
            <View style={styles.contents} >
               <Image
                  source={Logo}
                  style={styles.logo}
               />
               <View style={styles.form} >
                  <BoxCountry
                     title=""
                     onPress={() => renderListCountry(true)}
                  />
                  <TextInputMask
                     style={styles.textInput}
                     placeholder="Digite o número"
                     clearButtonMode="while-editing"
                     keyboardType="phone-pad"
                     // type={'cel-phone'}
                     type={'custom'}
                     options={{
                        mask: '(99) 99999-9999'
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
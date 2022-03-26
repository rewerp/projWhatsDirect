import React from 'react';
import { ImageBackground, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

import { Main } from './src/screens/Main/index';

import BackGroundImg from './src/assets/images/wtsback.png';

export default function App() {
   const [fontsLoaded] = useFonts({
      Roboto_400Regular,
      Roboto_700Bold
    });
  
    if (!fontsLoaded) {
      return <AppLoading />
    }

   return (
      <View>
         <ImageBackground 
            source={BackGroundImg} 
            style={{width:'100%', height:'100%'}}
         >
            <Main />
         </ImageBackground>
      </View>
   );
}



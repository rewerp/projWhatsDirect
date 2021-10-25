import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

import { Main } from './src/screens/Main/index';

export default function App() {
   const [fontsLoaded] = useFonts({
      Roboto_400Regular,
      Roboto_700Bold
    });
  
    if (!fontsLoaded) {
      return <AppLoading />
    }

   return (
      <Main />
   );
}



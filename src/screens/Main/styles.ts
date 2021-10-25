import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
   scrollView: {
      flex: 1,
      backgroundColor: COLORS.BACKGROUNDMAIN,
   },

   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
   },

   contents: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
   },

   logo: {
      width: 180,
      height: 89.79,
   },

   form: {
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 60,
   },

   textInput: {
      color: COLORS.BLACK,
      backgroundColor: COLORS.WHITE,
      height: 50,
      width: 280,
      borderWidth: 0,
      borderRadius: 5,
      textAlign: 'center',
      fontSize: 22,
      marginBottom: 20,
      paddingHorizontal: 10,
   },

   button: {
      backgroundColor: COLORS.GREEN,
      borderWidth: 0,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: 280,
   },

   buttonText: {
      color: COLORS.WHITE,
      fontWeight: 'bold',
      fontSize: 18,
   }
 });
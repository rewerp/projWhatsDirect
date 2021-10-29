import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({
   scrollView: {
      flex: 1,
      // backgroundColor: COLORS.BACKGROUNDMAIN,
      backgroundColor: 'transparent',
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
      width: 200,
      height: 72,
   },

   form: {
      width: '100%',
      height: 200,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 60,
   },

   boxCountry: {
      flexDirection: 'row',
      backgroundColor: COLORS.WHITE,
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
      width: 280,
      borderWidth: 0,
      borderRadius: 5,
   },

   imageContry: {
      borderRightWidth: 1,
      borderColor: 'black',
      // backgroundColor: 'red',
   },

   textCountry: {
      color: COLORS.TEXTINPUT,
      width: '70%',
      textAlign: 'center',
      fontFamily: FONTS.REGULAR,
      fontSize: 22,
   },

   textInput: {
      color: COLORS.TEXTINPUT,
      backgroundColor: COLORS.WHITE,
      height: 50,
      width: 280,
      borderWidth: 0,
      borderRadius: 5,
      textAlign: 'center',
      fontFamily: FONTS.REGULAR,
      fontSize: 22,
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
      fontFamily: FONTS.BOLD,
      fontWeight: 'bold',
      fontSize: 22,
   }
 });
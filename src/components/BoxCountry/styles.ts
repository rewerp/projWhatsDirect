import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../theme';

export const styles = StyleSheet.create({

  boxCountry: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 320,
    borderWidth: 0,
    borderRadius: 5,
  },

  imageCountry: {
    //
  },

  textCountry: {
    color: COLORS.TEXTINPUT,
    width: '80%',
    textAlign: 'left',
    fontFamily: FONTS.REGULAR,
    fontSize: 22,
    paddingHorizontal: 10,
  },

});
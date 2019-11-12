import { StyleSheet } from 'react-native';
import { COLOR_PALETTE, FONT_PALETTE } from '../../../common/constants';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        height: `100%`,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: COLOR_PALETTE.MAIN_BACKGROUND,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: FONT_PALETTE.OPEN_SANS_BOLD,
        fontSize: 13
    }
});
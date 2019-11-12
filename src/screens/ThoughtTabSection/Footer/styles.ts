import { StyleSheet } from 'react-native';
import { COLOR_PALETTE, FONT_PALETTE } from '../../../common/constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        flexDirection: 'column'
    },
    touchable: {
        height: 50,
        width: '100%'
    },
    linearGradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: '#ffff',
        fontFamily: FONT_PALETTE.OPEN_SANS_BOLD,
        fontSize: 15,
        letterSpacing: 0.5,
        lineHeight: 21
    }
});
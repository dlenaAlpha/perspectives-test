import { StyleSheet } from 'react-native';
import { FONT_PALETTE, COLOR_PALETTE } from '../../common/constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    tabContent: {
        flex: 1,
        width: '100%',
    },
    tabListContainer: {
        height: 70,
        width: '100%',
        flexDirection: 'row'
    },
    tabElement: {
        flex: 1,
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    selected: {
        height: 5,
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: COLOR_PALETTE.SELECTED_TAB
    },
    text: {
        marginTop: 9,
        fontFamily: FONT_PALETTE.OPEN_SANS_BOLD,
        fontSize: 9,
        letterSpacing: 0.5,
        lineHeight: 12
    }
});
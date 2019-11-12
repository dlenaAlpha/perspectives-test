import { StyleSheet } from 'react-native';
import { COLOR_PALETTE, FONT_PALETTE } from '../../common/constants';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        backgroundColor: COLOR_PALETTE.MAIN_BACKGROUND
    },
    thoughtTitleSection: {
        paddingTop: Constants.statusBarHeight,
        width: '90%'
    },
    thoughtDetailSection: {
        flex: 1,
        width: '90%',
        backgroundColor: COLOR_PALETTE.DETAIL_BACKGROUND,
        flexDirection: 'column',
        marginBottom: 16,
        marginTop: 15,
        borderRadius: 4
    },
    explanationContainer: {
        width: '100%',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: COLOR_PALETTE.BORDER_LINE,
        paddingLeft: 21,
        paddingRight: 19,
        paddingBottom: 22,
        paddingTop: 26
    },
    explanationTitle: {
        fontFamily: FONT_PALETTE.OPEN_SANS_BOLD,
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 10
    },
    explanationContent: {
        fontFamily: FONT_PALETTE.OPEN_SANS,
        fontSize: 16,
        lineHeight: 24,
        color: COLOR_PALETTE.TEXT.DETAIL
    }
});
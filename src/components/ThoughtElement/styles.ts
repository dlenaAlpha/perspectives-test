import { StyleSheet } from 'react-native';
import { FONT_PALETTE } from '../../common/constants';

export default StyleSheet.create({
    container: {
        marginTop: 20,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        width: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailContainer: {
        flex: 1,
        paddingTop: 15,
        paddingBottom: 11,
        marginRight: 10,
        borderRadius: 6,
        borderColor: '#DCDCDC',
    },
    textContainer: {
        marginRight: 15,
        marginLeft: 10,
        flexDirection: 'column'
    },
    touchableContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontFamily: FONT_PALETTE.OPEN_SANS_BOLD,
        fontSize: 15,
        lineHeight: 24,
        shadowColor: '#ffff'
    },
    dateText: {
        marginTop: 5,
        fontFamily: FONT_PALETTE.OPEN_SANS,
        fontSize: 11,
        lineHeight: 15,
        shadowColor: '#ffff'
    },
    rightArrowContainer: {
        marginRight: 0
    },
    leftArrowContainer: {
        marginRight: 10
    }
});
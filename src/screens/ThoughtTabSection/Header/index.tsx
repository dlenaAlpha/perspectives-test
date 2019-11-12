import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { DISPLAY_TEXT } from '../../../common/constants';

const Header = () => (
    <View style={styles.container}>
        <Text style={styles.text}>{DISPLAY_TEXT.THOUGHT_LIST_HEADER}</Text>
    </View>
)

export default Header;
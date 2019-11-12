import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { DISPLAY_TEXT, COLOR_PALETTE } from '../../../common/constants';
import { LinearGradient } from 'expo-linear-gradient';

const Footer = () => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.touchable}>
            <LinearGradient colors={COLOR_PALETTE.BUTTON_GRADIENT} style={styles.linearGradient}>
                <Text style={styles.text}>{DISPLAY_TEXT.ADD_THOUGHT}</Text>
            </LinearGradient>
        </TouchableOpacity>
    </View>
)

export default Footer;
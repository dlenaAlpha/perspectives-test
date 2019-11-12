import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Header from './Header';
import Footer from './Footer';
import List from './List';
import { mockedThoughList } from '../../common/mockedData';

const ThoughtTabSection = () => (
    <View style={styles.container}>
        <View style={styles.titleSection}>
            <Header />
        </View>
        <View style={styles.listSection}>
            <List thoughtList={mockedThoughList} />
        </View>
        <View style={styles.footerSection}>
            <Footer />
        </View>
    </View>
)

export default ThoughtTabSection;
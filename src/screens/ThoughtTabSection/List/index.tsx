import React from 'react';
import { View, ScrollView } from 'react-native';
import styles from './styles';
import ThoughtElement, { RenderType } from '../../../components/ThoughtElement';
import { Thought } from '../../../common/model';

const List = (props: { thoughtList: Thought[] }) => (
    <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
            {props.thoughtList.map((thought, i) => <ThoughtElement key={i} thought={thought} renderType={RenderType.ARROW_RIGHT_SIDE} />)}
        </ScrollView>
    </View>
)

export default List;




import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { moodToIcon, unixDateToString } from '../../common/utils';
import { Thought } from '../../common/model';
import { TouchableOpacity } from 'react-native-gesture-handler';
// @ts-ignore
import RightArrow from '../../../assets/icons/arrow_right.svg'
// @ts-ignore
import LeftArrow from '../../../assets/icons/arrow_left.svg'
import { ScreenEnum } from '../../common/navigation';
import { withNavigation } from 'react-navigation';
import { COLOR_PALETTE } from '../../common/constants';

interface ThoughtElementState {
    thought: Thought;
    navigation: any;
    renderType: RenderType
}

export enum RenderType {
    ARROW_RIGHT_SIDE,
    ARROW_LEFT_SIDE
}

class ThoughtElement extends React.Component<ThoughtElementState> {

    onPress = () => {
        if (this.props.renderType === RenderType.ARROW_RIGHT_SIDE)
            this.props.navigation.navigate(ScreenEnum.ThoughtDetail, { thought: this.props.thought })
        if (this.props.renderType === RenderType.ARROW_LEFT_SIDE)
            this.props.navigation.navigate(ScreenEnum.MainTab)
    }

    renderArrowLeftSide = () => (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchableContainer} onPress={this.onPress}>
                <View style={styles.leftArrowContainer}>
                    <LeftArrow />
                </View>
                <View style={styles.iconContainer}>
                    {moodToIcon(this.props.thought.mood, COLOR_PALETTE.MAIN_BACKGROUND)}
                </View>
            </TouchableOpacity>
            <View style={styles.detailContainer}>
                {/* <TouchableOpacity style={styles.touchableContainer} onPress={this.onPress}> */}
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{this.props.thought.title}</Text>
                    <Text style={styles.dateText}>{unixDateToString(this.props.thought.createdUTC)}</Text>
                </View>
                {/* </TouchableOpacity> */}
            </View>
        </View>
    )

    renderArrowRightSide = () => (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                {moodToIcon(this.props.thought.mood, COLOR_PALETTE.DETAIL_BACKGROUND)}
            </View>
            <View style={{ ...styles.detailContainer, borderWidth: 1 }}>
                <TouchableOpacity style={styles.touchableContainer} onPress={this.onPress}>
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>{this.props.thought.title}</Text>
                        <Text style={styles.dateText}>{unixDateToString(this.props.thought.createdUTC)}</Text>
                    </View>
                    <View style={styles.rightArrowContainer}>
                        <RightArrow />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )

    render = () => {
        switch (this.props.renderType) {
            case RenderType.ARROW_LEFT_SIDE:
                return this.renderArrowLeftSide();
            case RenderType.ARROW_RIGHT_SIDE:
                return this.renderArrowRightSide();
        }
    }
}

export default withNavigation(ThoughtElement);
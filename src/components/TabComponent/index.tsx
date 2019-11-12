import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { COLOR_PALETTE } from '../../common/constants';

interface TabComponentProps {
    tabs: {
        text: string;
        icon: (colorFill?: string) => JSX.Element;
        tabContent?: () => JSX.Element;
    }[];
}
interface TabComponentState {
    selectedTab: number;
}

class TabComponent extends React.Component<TabComponentProps, TabComponentState> {

    constructor(props) {
        super(props)
        this.state = { selectedTab: 2 }
    }

    selectTab = (id: number) => this.setState({ selectedTab: id })

    render = () => {
        const TabContent = this.props.tabs[this.state.selectedTab].tabContent;
        return (
            <View style={styles.container}>
                <View style={styles.tabContent}>
                    {TabContent && <TabContent />}
                </View>
                <View style={styles.tabListContainer}>
                    {
                        this.props.tabs.map((tab, i) => {
                            const isSelected = (i === this.state.selectedTab);
                            return (
                                <TouchableOpacity key={i} style={styles.tabElement} onPress={() => this.selectTab(i)}>
                                    {tab.icon(isSelected && COLOR_PALETTE.SELECTED_TAB)}
                                    <Text style={{ ...styles.text, color: isSelected ? COLOR_PALETTE.SELECTED_TAB : null }}>{tab.text}</Text>
                                    {
                                        isSelected &&
                                        <View style={styles.selected} />
                                    }
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}

export default TabComponent;
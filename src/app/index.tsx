import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import { ScreenEnum } from '../common/navigation';
import { loadAsync } from 'expo-font';
import { FONT_PALETTE } from '../common/constants';
import MainTab from '../screens/MainTab';
import ThoughtDetail from '../screens/ThoughtDetail';

export const withFontsLoaded = (Component: React.ComponentClass) => (
    class extends React.Component<null, { fontLoaded: boolean }> {

        constructor(props) {
            super(props)
            this.state = { fontLoaded: false }
        }

        public componentDidMount = async () => {
            await loadAsync({
                [FONT_PALETTE.OPEN_SANS_BOLD]: require('../../assets/fonts/OpenSans-Bold.ttf'),
                [FONT_PALETTE.OPEN_SANS]: require('../../assets/fonts/OpenSans-Regular.ttf')
            });
            this.setState({ fontLoaded: true });
        }

        public render = () => {
            if (this.state.fontLoaded) {
                return <Component />;
            }
            return null;
        }
    }
)

const MainNavigator = createStackNavigator({
    [ScreenEnum.MainTab]: {
        screen: MainTab,
        navigationOptions: () => ({
            header: () => null
        })
    },
    [ScreenEnum.ThoughtDetail]: {
        screen: ThoughtDetail,
        navigationOptions: () => ({
            header: () => null
        })
    }
});

export default withFontsLoaded(createAppContainer(MainNavigator));
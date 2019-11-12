import App from './src/app/index';
import React from 'react';
import { loadAsync } from 'expo-font';

class WithFontLoad extends React.Component {
    componentDidMount = () => {
        loadAsync({ 'open-sans': require('./assets/fonts/OpenSans-Regular.ttf') });
    }
    render = () => App
}

export default App;

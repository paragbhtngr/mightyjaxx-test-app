import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import * as Font from 'expo-font';

// Import Screens
import HomeScreen from './screens/home';
import LoginScreen from './screens/login';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      fontLoaded: false
    }
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      'barlow-regular': require('./assets/fonts/Barlow_Condensed/BarlowCondensed-Regular.ttf'),
      'barlow-medium': require('./assets/fonts/Barlow_Condensed/BarlowCondensed-Medium.ttf'),
      'barlow-light': require('./assets/fonts/Barlow_Condensed/BarlowCondensed-Light.ttf'),
    });
    this.setState({ fontLoaded: true })
  }

  render() {
    return this.state.fontLoaded ? <AppContainer /> : null;
  }
}
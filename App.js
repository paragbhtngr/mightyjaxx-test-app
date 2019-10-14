import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

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


export default createAppContainer(AppNavigator);
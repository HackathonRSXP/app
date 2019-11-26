import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Welcome from './pages/Welcome';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createSwitchNavigator(
          {
            Welcome,
            // Registration,
            // Profile,
          }
          // {
          //   resetOnBlur: true,
          //   tabBarOptions: {
          //     keyboardHidesTabBar: true,
          //     activeTintColor: '#fff',
          //     inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
          //     style: {
          //       borderTopColor: '#2B1A2F',
          //       backgroundColor: '#2B1A2F',
          //     },
          //   },
          // }
        ),
      },
      {
        initialRouteName: 'App',
        // initialRouteName: isSigned ? "App" : "Sign"
      }
    )
  );

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Welcome from './pages/Welcome';
import Filters from './pages/Filters';
import Enterprises from './pages/Enterprises';
import Preview from './pages/Preview';

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
            Enterprises,
            Filters,
            Welcome,
            Preview,
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

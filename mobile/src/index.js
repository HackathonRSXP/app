import React from 'react';
import { StatusBar, View } from 'react-native';
// import FlashMessage from 'react-native-flash-message';
import './config/ReactotronConfig';

import App from './App';

export default function Index() {
  return (
    <View>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.3)"
      />
      <App />
    </View>
  );
}

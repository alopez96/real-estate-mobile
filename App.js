import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import React from 'react';

//import route
import { MainApp } from './app/config/route';

//import React navigation container
import { NavigationContainer } from '@react-navigation/native';

import Home from './app/screens/Home';

//defining empty array as placeholder
posts = []

export default function App() {

  return (
    <NavigationContainer>
      <MainApp/>
    </NavigationContainer>
  );
}

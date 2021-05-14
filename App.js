import 'react-native-gesture-handler';
import React from 'react';
// import { StatusBar } from 'expo-status-bar';

//import route
import { MainApp } from './app/config/route';

//import React navigation container
import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  return (
    <NavigationContainer>
      <MainApp/>            
    </NavigationContainer>
  );
}

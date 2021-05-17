import 'react-native-gesture-handler';
import React from 'react';
// import { StatusBar } from 'expo-status-bar';

//import route
import { WelcomeStack } from './app/config/route';

//import React navigation container
/*
  We only need one NavigationContainer.
  This is no longer needed here since we are including it in the stack
  navigator in route.js. If we were to remove the stack navigator, and only keep
  the tab navigator (which doesn't have the NavigationContainer),
  we would need to add this import back in.
*/
// import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  return (
    <>
      <WelcomeStack/>
    </>
  );
}

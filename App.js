import { StatusBar } from 'expo-status-bar';
import React from 'react';

//import route
import MainApp from './app/config/route';

//defining empty array as placeholder
posts = []

export default function App() {

  return (
    <>
    <MainApp posts={posts}/>
    </>
  );
}

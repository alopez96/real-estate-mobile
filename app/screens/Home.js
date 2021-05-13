import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import custom components
import { MainButton } from '../components/main_button';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
      <StatusBar style="auto" />
      <MainButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
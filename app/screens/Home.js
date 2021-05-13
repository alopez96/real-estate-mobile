import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

//import custom components
import { MainButton } from '../components/main_button';
import { RentalForm } from '../components/rental_form';

//import styles
import styles from './styles';

export default function Home() {

  const [price, setPrice] = useState(0)

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Home [Placeholder]!</Text>
      <RentalForm
        price={price}
      />
      <MainButton/>
    </View>
  );
}
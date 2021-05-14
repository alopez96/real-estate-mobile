import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';


function RentalForm({ value, updateState }){

    // set value to string to display as text
    if(value === 0){
        value = null
    } else {
        value = value.toString()
    }

    return(
        <>
        <View>
            <Text>Label</Text>
            <TextInput
            placeholder='value'
            style={styles.input}
            value={value}
            onChangeText={(target) => updateState(value, target)}
            />
        </View>
        </>
    )
}

export default RentalForm;
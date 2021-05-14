import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';


function RentalForm({ var_name, value, updateState }){

    // if the value is zero, set to null so that
    // we display the placeholder instead of 0
    if(value === 0){
        value = null
    }
    // set value to string to display as text
    if(typeof(value) == 'number'){
        value = value.toString()
    }

    const verifyInput = (var_name, val) => {
        // check if input is a number
        if(isNaN(val)){
            alert('input must be a number')
            return;
        }
        // if it is a number, update the state
        else{
            updateState(var_name, val)
        }
    }

    return(
        <>
        <View style={styles.row}>
            <Text>{var_name}</Text>
            <TextInput
            placeholder={var_name}
            style={styles.input}
            value={value}
            keyboardType='phone-pad'
            onChangeText={(val) => verifyInput(var_name, val)}
            />
        </View>
        </>
    )
}

export default RentalForm;
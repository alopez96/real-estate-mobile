import React from 'react';
import { View, Text, TextInput, Keyboard } from 'react-native';
import styles from './styles';


function RentalForm({ var_name, value, isPercent, updateState }){

    // if the value is zero, set to null so that
    // we display the placeholder instead of 0
    if(value === 0){
        value = null
    }
    // set value to string to display as text
    if(typeof(value) == 'number'){
        value = value.toString()
    } else if(typeof(value) == 'string'){
        // if its already string, do nothing
    }

    const verifyInput = (var_name, val) => {
        // check if input is a number
        if(isNaN(val)){
            // if it's, display error and do not accept as input
            alert('input must be a number')
            return;
        }
        // if it is a number, accept the input and update the state
        else{
            updateState(var_name, val)
        }
    }

    return(
        <>
        <View style={styles.row}>
            <Text>{var_name}</Text>
            {isPercent
            ? <Text style={styles.lightText}> %</Text>
            : null
            }
            <TextInput
            placeholder={var_name}
            style={styles.input}
            value={value}
            keyboardType='decimal-pad'
            // add a done button to allow user to hide keypad
            returnKeyType={ 'done' }
            onChangeText={(val) => verifyInput(var_name, val)}
            />
        </View>
        </>
    )
}

export default RentalForm;
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
    else if(typeof(value) == 'number')
        value = value.toString()
    else {
        // do nothing
    }

    return(
        <>
        <View style={styles.row}>
            <Text>{var_name}</Text>
            <TextInput
            placeholder={var_name}
            style={styles.input}
            value={value}
            onChangeText={(val) => updateState(var_name, val)}
            />
        </View>
        </>
    )
}

export default RentalForm;
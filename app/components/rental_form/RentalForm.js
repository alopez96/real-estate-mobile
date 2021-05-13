import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';


function RentalForm({ price }){

    if(price === 0){
        price = null
    } else {
        price = price.toString()
    }

    return(
        <>
            <TextInput
            placeholder='INPUT WITH ICON'
            style={styles.input}
            value={price}
            />
        </>
    )
}

export default RentalForm;
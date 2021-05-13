import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';


function RentalForm({ price, rent, updateState }){

    // set price to string to display as text
    if(price === 0){
        price = null
    } else {
        price = price.toString()
    }

    // set rent to string to display as text
    if(rent === 0){
        rent = null
    } else {
        rent = rent.toString()
    }

    return(
        <>
            <TextInput
            placeholder='Price'
            style={styles.input}
            value={price}
            onChangeText={(target) => updateState('price', target)}
            />

            <TextInput
            placeholder='Rent'
            style={styles.input}
            value={rent}
            onChangeText={(target) => updateState('rent', target)}
            />
        </>
    )
}

export default RentalForm;
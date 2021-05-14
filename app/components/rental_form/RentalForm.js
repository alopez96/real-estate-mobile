import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

//import custom component
import Input from './Input';

function RentalForm({ items, updateState }){

    return(
        <>
        {/* <View style={styles.row}>
            <Text>Price</Text>
            <TextInput
            placeholder='Price'
            style={styles.input}
            value={price}
            onChangeText={(target) => updateState('price', target)}
            />
        </View>

        <View style={styles.row}>
            <Text>Rent</Text>
            <TextInput
            placeholder='Rent'
            style={styles.input}
            value={rent}
            onChangeText={(target) => updateState('rent', target)}
            />
        </View> */}

        {items.length > 0
            ?
            items.map((item, index) =>
                <Input
                key={index}
                var_name={item.var_name}
                value={item.value}
                updateState={updateState}
                />
            )
            : null
        }
        </>
    )
}

export default RentalForm;
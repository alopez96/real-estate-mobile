import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

//import custom component
import Input from './Input';

function RentalForm({ items, updateState }){

    return(
        <View style={styles.flexEnd}>

        {items.length > 0
            ?
            items.map((item, index) =>
                <Input
                key={index}
                var_name={item.var_name}
                value={item.value}
                isPercent={item.isPercent}
                updateState={updateState}
                />
            )
            : null
        }
        
        </View>
    )
}

export default RentalForm;
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

function Header({ prefix, text }){

    return(
        <View style={styles.row}>
        <Text style={styles.grayText}>
            {prefix}
        </Text>
        <Text style={styles.darkText}>
            {text}
        </Text>
        </View>
    )
}

export default Header;
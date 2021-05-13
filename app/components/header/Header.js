import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

function Header({ text }){

    return(
        <Text style={styles.largeText}>
            {text}
        </Text>
    )
}

export default Header;
import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

function TitleText({ text }) {

    return(
        <Text style={styles.largeText}>
            {text}
        </Text>
    )
}

export default TitleText;
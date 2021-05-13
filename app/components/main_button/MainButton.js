import React from 'react';
import { Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';


function MainButton({ action }){

    return(
        <TouchableOpacity
        style={styles.content}
        onPress={() => action()}
        >
            <Ionicons
            name={'trash-outline'}
            size={26} color='white'
            />
            <Text style={styles.text}>Test</Text>
        </TouchableOpacity>
    )
}

export default MainButton;
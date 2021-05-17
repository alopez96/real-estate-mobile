import React from 'react';
import { View, Button } from 'react-native';

//import styles
import styles from './styles';

//import custom components
import { TitleText } from '../components/title_text';

function Welcome({ navigation }) {

    return (
        <View style={styles.container}>
            <TitleText
                text='Welcome to Acre. We will help you analyze [Real Estate] properties.'
            />

            <Button
                title="Let's get some deals >"
                onPress={() => navigation.navigate('MainApp')}
            />
        </View>
    )
}


export default Welcome;
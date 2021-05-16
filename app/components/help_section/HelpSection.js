import React from 'react';
import { View, Text } from 'react-native';
import { Button, Overlay, Chip } from 'react-native-elements';

//import custom styles
import styles from './styles';


function HelpSection({visible, toggleOverlay}) {

    return(
        <>
        <View style={styles.corner}>
            <Chip
                title="Help"
                type='outline'
                onPress={toggleOverlay}
            />
        </View>

        <Overlay
            isVisible={visible}
            onBackdropPress={toggleOverlay}
            fullScreen={true}
        >
        <View style={styles.container}>
            <Text>Hello from Overlay!</Text>
            <Chip
            title="Go back"
            type='outline'
            onPress={toggleOverlay}
        />
        </View>
        </Overlay>
      </>
    )
}

export default HelpSection;
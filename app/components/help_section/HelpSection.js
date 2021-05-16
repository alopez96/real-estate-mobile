import React from 'react';
import { View, Text } from 'react-native';
import { Overlay, Chip } from 'react-native-elements';

//import custom styles
import styles from './styles';


function HelpSection({visible, toggleOverlay, helpText}) {

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
            <Text>
                {helpText}
            </Text>

            <View style={styles.btn}>
            <Chip
                title="Go back"
                type='outline'
                onPress={toggleOverlay}
            />
             </View>
        </View>
        </Overlay>
      </>
    )
}

export default HelpSection;
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
            <Text>
                This app will help you analyze Real estate properties.
                The Invest page will calculate the following:{"\n"}
            </Text>
            <Text>
                1. Cash needed to purchase the property. This includes
                down payment and closing costs. On top of the amount given by
                app, we recommend also adding expected repair expenses,
                and 10-15,000 for buffer.{"\n"}
            </Text>
            <Text>
                2. Monthly cashflow that you can expect from the property.
                Cash flow is given by taking the income produced by the property
                (rent) minus the expenses on the property.
                The following numbers are asssumed:{"\n"}
                    tax_percent = 0.75%{"\n"}
                    insurance = $2500{"\n"}
                    pmi_percent = 1.0%{"\n"}
                    vacancy_percent = 10%{"\n"}
                    repairs_percent = 10%{"\n"}
                    property_mgt_percent = 10%{"\n"}
                    capex_monthly = $200{"\n"}
            </Text>

            <Text>
                3. Cash on cash - represents your annual return on investment. 
                This is calculated by taking the 
                estimated yearly cash flow and diving it by the initial
                money invested.
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
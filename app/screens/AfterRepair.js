import React, { useState } from 'react';
import { View } from 'react-native';

//import custom components
import { MainButton } from '../components/main_button';
import { RentalForm } from '../components/rental_form';
import { HeaderText } from '../components/header_text';
import { TitleText } from '../components/title_text';
import { HelpSection } from '../components/help_section';

//import math  function
import {
    getOfferAmount
  } from '../math/';
  

//import styles
import styles from './styles';

//import text for help screen
import { helpTextAfterRepair } from './helpText';


function AfterRepair() {

    const [arv, setArv] = useState(0)
    const [rehabCost, setRehabCost] = useState(0)
    const [offer, setOffer] = useState(0)
    const [percent, setPercent] = useState(90) // this value will be divided by 100 to get percentage
    const [visible, setVisible] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    var list_of_numbers = [
        {
        var_name: 'arv',
        value: arv
        },
        {
        var_name: 'rehab cost',
        value: rehabCost
        },
        {
            var_name: 'percent',
            value: percent
        }
    ]

    const updateState = (var_name, val) => {
        
        switch(var_name) {
        case 'arv':
            setArv(val)
            break; // exist out of switch
        case 'rehab cost':
            setRehabCost(val)
            break; // exist out of switch
        case 'percent':
            setPercent(val)
            break; // exist out of switch
        default:
            // define default
            console.log('var_name', var_name, ' does not exist for', val);
            alert('error with input values');
        }
    }

    const onPressBtn = async() => {
        //verify input
        if(isNaN(arv) || isNaN(rehabCost)){
            alert('input must be a number');
            return;
        }

        // if input is a string, and the length of the string is 0, alert error
        if(arv.length === 0 || rehabCost.length === 0){
            alert('input must not be 0');
            return;  
        }

        else if(arv === 0 || rehabCost === 0){
            alert('input must not be 0');
            return;
            }

        // once variables have beeen verified, run the math

        // I am running the 70% rule using 90% for Northern California
        var offer_amount = getOfferAmount(arv, rehabCost, percent);
        
        setOffer(offer_amount);

        // update state to show the results
        setIsSubmitted(true)
    }

    const toggleOverlay = () => {
        setVisible(!visible);
    };

    return(
        <View style={styles.container}>
            <TitleText
            text='[70] Percent Rule'
            />

        <RentalForm
                items={list_of_numbers}
                updateState={updateState}
            />

        <MainButton
                action={onPressBtn}
                text='Run 70% rule'
                icon='cash-outline'
            />

        {
            isSubmitted

            ?
            <>
            <HeaderText
                prefix='Offer amount: $'
                text={offer.toString()}
            />
            </>

            :null

        }

        <HelpSection
            visible={visible}
            toggleOverlay={toggleOverlay}
            helpText={helpTextAfterRepair}
        />
        </View>
    )
}

export default AfterRepair;
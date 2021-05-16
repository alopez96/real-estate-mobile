import React, { useState } from 'react';
import { View } from 'react-native';

//import custom components
import { MainButton } from '../components/main_button';
import { RentalForm } from '../components/rental_form';
import { HeaderText } from '../components/header_text';
import { TitleText } from '../components/title_text';

//import math  function
import {
    getOfferAmount
  } from '../math/';
  

//import styles
import styles from './styles';

function AfterRepair() {

    const [arv, setArv] = useState(0)
    const [rehabCost, setRehabCost] = useState(0)
    const [offer, setOffer] = useState(0)

    var list_of_numbers = [
        {
        var_name: 'arv',
        value: arv
        },
        {
        var_name: 'rehab cost',
        value: rehabCost
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

        // anything less than 1% will probably not generate any cashflow
        // anything between 1-2% will probably generate decent cashflow
        // anything more than 2% will generate cashflow (be wary of these, usually not a good sign)
        var offer_amount = getOfferAmount(arv, rehabCost);
        
        setOffer(offer_amount);
    }

    return(
        <View style={styles.container}>
            <TitleText
            text='[70%] Rule'
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

        <HeaderText
                prefix='Offer amount: '
                text={offer.toString()}
            />
        </View>
    )
}

export default AfterRepair;
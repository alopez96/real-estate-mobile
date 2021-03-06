import React, { useState } from 'react';
import { View } from 'react-native';

//import custom components
import { TitleText } from '../components/title_text';
import { RentalForm } from '../components/rental_form';
import { MainButton } from '../components/main_button';
import { HeaderText } from '../components/header_text';
import { HelpSection } from '../components/help_section';

//import styles
import styles from './styles';

//import text for help screen
import { helpTextShop } from './helpText';


export default function Shop() {

  const [price, setPrice] = useState(0)
  const [rent, setRent] = useState(0)
  const [percent, setPercent] = useState(0)
  const [visible, setVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  var list_of_numbers = [
    {
      var_name: 'price',
      value: price
    },
    {
      var_name: 'rent',
      value: rent
    }
  ]

  const updateState = (var_name, val) => {
      
    switch(var_name) {
      case 'price':
        setPrice(val)
        break; // exist out of switch
      case 'rent':
        setRent(val)
        break; // exist out of switch
      default:
        // define default
        console.log('var_name', var_name, ' does not exist for', val);
        alert('error with input values');
    }
  }

  const onPressBtn = async() => {
    //verify input
    if(isNaN(price) || isNaN(rent)){
      alert('input must be a number');
      return;
    }

    // if input is a string, and the length of the string is 0, alert error
    if(price.length === 0 || rent.length === 0){
      alert('input must not be 0');
      return;  
    }

    else if(price === 0 || rent === 0){
      alert('input must not be 0');
      return;
    }

    // once variables have beeen verified, run the math
    var perc = rent/price;
    perc = perc * 100;
    
    // only show two decimal places and convert toString
    percent_string = perc.toFixed(2);

    // anything less than 1% will probably not generate any cashflow
    // anything between 1-2% will probably generate decent cashflow
    // anything more than 2% will generate cashflow (be wary of these, usually not a good sign)
    setPercent(percent_string);

    // update state to show the results
    setIsSubmitted(true)
  }

  const toggleOverlay = () => {
    setVisible(!visible);
  };


  return (
    <View style={styles.container}>
      <TitleText
        text='[1-2] Percent Rule'
      />
      
      <RentalForm
        items={list_of_numbers}
        updateState={updateState}
      />

      <MainButton
        action={onPressBtn}
        text='Get percentage'
        icon='analytics-outline'
      />

      {
        isSubmitted
        ?
        
        <>
        <HeaderText
          prefix='1-2 % Test result: '
          text={percent.toString()}
        />
        </>

        :null
      }

      <HelpSection
        visible={visible}
        toggleOverlay={toggleOverlay}
        helpText={helpTextShop}
      />
    </View>
  );
}

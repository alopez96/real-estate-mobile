import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

//import custom components
import { MainButton } from '../components/main_button';
import { RentalForm } from '../components/rental_form';
import { HeaderText } from '../components/header_text';
import { TitleText } from '../components/title_text';
import { HelpSection } from '../components/help_section';

//import math  functions
import { 
  getCashNeeded, 
  getMonthlyExpenses, 
  getMortgagePayments,
  getCashflow,
  getCashoncash
} from '../math/';

// import helper function
import { numberWithCommas } from '../math/helpers';

//import styles
import styles from './styles';

//import text for help screen
import { helpTextHome } from './helpText';


export default function Home() {

  const [price, setPrice] = useState(0)
  const [rent, setRent] = useState(0)
  const [cashflow, setCashflow] = useState(0)
  const [cashoncash, setCashoncash] = useState(0)
  const [cashNeeded, setCashNeeded] = useState(0)
  const [mortgagePayments, setMortgagePayments] = useState(0)
  const [totalExpenses, setTotalExpenses] = useState(0)
  const [interest, setInterest] = useState(3.25) // this value will be divided by 100 to get percentage
  const [downpayment, setDownpayment] = useState(3) // this value will be divided by 100 to get percentage
  const [visible, setVisible] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
    
  const loan_duration = 30;
  const tax_percent = 0.0075;
  const insurance = 2500;
  const pmi_percent = 0.01;

  // define other expenses
  const vacancy_percent = 0.10;
  const repairs_percent = 0.10;
  const property_mgt_percent = 0.10;
  const capex_monthly = 200;

  var down_payment = price * (downpayment/100);


  const updateCashNeeded = () => {
    // call helper function to determine cash needed
    const cash = getCashNeeded(price, down_payment);

    // convert number to string with commas
    // const cash_string = numberWithCommas(cash);
    const cash_string = new Intl.NumberFormat().format(cash);

    // set state to string version of cash for easy to read text
    setCashNeeded(cash_string);

    // return number version of cash bc it is used for math calculations
    return cash;
  }


  const getMonthlyProfit = () => {
      return rent;
  }

  const updateCashflow = () => {
    // define principal loan amounn)
    var principal_amount = price - down_payment;
    // get monthly expenses with the following two functions
    var mortgage_pay = getMortgagePayments(principal_amount, interest, loan_duration)
    
    // setMortgagePayments(mortgage_pay.toFixed(2));
    const mortgage_readable = new Intl.NumberFormat().format(mortgage_pay);
    setMortgagePayments(mortgage_readable);

    var monthly_expenses =
      getMonthlyExpenses(
        price, mortgage_pay, pmi_percent, insurance,
        tax_percent, vacancy_percent, repairs_percent,
        property_mgt_percent, capex_monthly
      );

    // setTotalExpenses(monthly_expenses.toFixed(2));
    const total_readable = new Intl.NumberFormat().format(monthly_expenses);
    setTotalExpenses(total_readable);

    var monthly_profit = getMonthlyProfit();

    var cash_flow = getCashflow(monthly_profit, monthly_expenses)
    
    const cashflow_readable = new Intl.NumberFormat().format(cash_flow);
    setCashflow(cashflow_readable);

    return cash_flow;
  }


  const updateCashoncash = (cash_flow, cash_needed) => {
    var cash_on_cash = getCashoncash(cash_flow, cash_needed);
    setCashoncash(cash_on_cash);
  }

  const onPressBtn = async() => {
    //verify input
    if(isNaN(price) || isNaN(rent)){
      alert('Input must be a number');
      return;
    }

    // if input is a string, and the length of the string is 0, alert error
    if(price.length === 0 || rent.length === 0){
      alert('Input must not be 0');
      return;
    }
    else if(price === 0 || rent === 0){
      alert('Input must not be 0');
      return;  
    }

    // once variables have beeen verified, run the math
    const cash_needed =  await updateCashNeeded()
    const cash_flow = await updateCashflow()
    updateCashoncash(cash_flow, cash_needed)

    // update state to show the results
    setIsSubmitted(true)
  }


  const updateState = (var_name, val) => {
    
    switch(var_name) {
      case 'Home price':
        setPrice(val)
        break; // exist out of switch
      case 'Rent':
        setRent(val)
        break; // exist out of switch
      case 'Interest rate':
        setInterest(val)
        break; // exist out of switch
      case 'Down payment':
        setDownpayment(val)
        break; // exist out of switch
      default:
        // define default
        console.log('var_name', var_name, ' does not exist for', val);
        console.log('var_name must match a case in the switch within Home.updateState()');
    }
  }

  // var_name, value pairs
  // note: var_name must match a case in the switch within updateState()
  var list_of_numbers = [
    {
      var_name: 'Home price',
      value: price
    },
    {
      var_name: 'Rent',
      value: rent
    },
    {
      var_name: 'Interest rate',
      value: interest,
      isPercent: true
    },
    {
      var_name: 'Down payment',
      value: downpayment,
      isPercent: true
    }
  ]


  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TitleText
        text='[Rental] Property Analyzer'
      />

      <RentalForm
        items={list_of_numbers}
        updateState={updateState}
      />
      
      <MainButton
        action={onPressBtn}
        text='Analyze'
        icon='analytics-outline'
      />

      {
        isSubmitted
        ?
        <>
          <HeaderText
            prefix='Cash needed: $'
            text={cashNeeded.toString()}
          />

          <HeaderText
            prefix='Mortgage payments: $'
            text={mortgagePayments.toString()}
          />

          <HeaderText
            prefix='Total monthly expenses: $'
            text={totalExpenses.toString()}
          />

          <HeaderText
            prefix='Mothly cashflow: $'
            text={cashflow.toString()}
          />

          <HeaderText
            prefix='Cash on cash (%): '
            text={cashoncash.toString()}
          />
        </>

        : null
      }

      <HelpSection
        visible={visible}
        toggleOverlay={toggleOverlay}
        helpText={helpTextHome}
      />

    </View>
  );
}
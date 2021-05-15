import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

//import custom components
import { MainButton } from '../components/main_button';
import { RentalForm } from '../components/rental_form';
import { HeaderText } from '../components/header_text';
import { TitleText } from '../components/title_text';

//import math  function
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


export default function Home() {

  const [price, setPrice] = useState(0)
  const [rent, setRent] = useState(0)
  const [cashflow, setCashflow] = useState(0)
  const [cashoncash, setCashoncash] = useState(0)
  const [cashNeeded, setCashNeeded] = useState(0)
  const [interest, setInterest] = useState(0.0325)
    
    const loan_duration = 30;
    const down_payment_percent = 0.03;
    const tax_percent = 0.0075;
    const insurance = 2500;
    const pmi_percent = 0.01;

    // define other expenses
    const vacancy_percent = 0.10;
    const repairs_percent = 0.10;
    const property_mgt_percent = 0.10;
    const capex_monthly = 200;

    var down_payment = price * down_payment_percent;


    const updateCashNeeded = () => {
      // call helper function to determine cash needed
      const cash = getCashNeeded(price, down_payment);

      // convert number to string with commas
      const cash_string = numberWithCommas(cash);

      // set state to string version of cash for easy to read text
      setCashNeeded(cash_string);

      // return number version of cash bc it is used for math calculations
      return cash;
    }

    /*
    getMonthlyProfit
    this will be rent + any other payment form
    usually will be just limited to rent
    */
    const getMonthlyProfit = () => {
        return rent;
    }

    const updateCashflow = () => {
      // define principal loan amounn)
      var principal_amount = price - down_payment;
      // get monthly expenses with the following two functions
      var mortgage_pay = getMortgagePayments(principal_amount, interest, loan_duration)
      var monthly_expenses =
        getMonthlyExpenses(
          price, mortgage_pay, pmi_percent, insurance,
          tax_percent, vacancy_percent, repairs_percent,
          property_mgt_percent, capex_monthly
        );

      var monthly_profit = getMonthlyProfit();

      var cash_flow = getCashflow(monthly_profit, monthly_expenses)
      
      setCashflow(cash_flow);

      return cash_flow;
    }


    const updateCashoncash = (cash_flow, cash_needed) => {
      var cash_on_cash = getCashoncash(cash_flow, cash_needed);
      setCashoncash(cash_on_cash);
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
      const cash_needed =  await updateCashNeeded()
      const cash_flow = await updateCashflow()
      updateCashoncash(cash_flow, cash_needed)
    }

    const updateState = (var_name, val) => {
      
      switch(var_name) {
        case 'price':
          setPrice(val)
          break; // exist out of switch
        case 'rent':
          setRent(val)
          break; // exist out of switch
          case 'interest':
            setInterest(val)
            break; // exist out of switch
        default:
          // define default
          console.log('var_name', var_name, ' does not exist for', val)
      }
    }

    var list_of_numbers = [
      {
        var_name: 'price',
        value: price
      },
      {
        var_name: 'rent',
        value: rent
      },
      {
        var_name: 'interest',
        value: interest
      }
    ]

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TitleText
        text='[Real Estate] Analyzer'
      />

      <RentalForm
        items={list_of_numbers}
        updateState={updateState}
      />
      
      <MainButton
        action={onPressBtn}
        text='Analyze'
      />

      <HeaderText
        prefix='Cash needed: $'
        text={cashNeeded.toString()}
      />

      <HeaderText
        prefix='Mothly Cashflow: $'
        text={cashflow.toString()}
      />

      <HeaderText
        prefix='Cash on cash (%): '
        text={cashoncash.toString()}
      />
    </View>
  );
}
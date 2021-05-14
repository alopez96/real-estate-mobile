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
  getCashflow
} from '../math/';

//import styles
import styles from './styles';


export default function Home() {

  const [price, setPrice] = useState(0)
  const [rent, setRent] = useState(0)
  const [cashflow, setCashflow] = useState(0)
  const [cashoncash, setCashoncash] = useState(0)
  const [cashNeeded, setCashNeeded] = useState(0)
    
    const loan_duration = 30;
    const interest_perecent = 0.0325;
    const down_payment_percent = 0.03;
    const tax_percent = 0.0075;
    const insurance = 2500;
    const pmi_percent = 0.01;

    // define other expenses
    const vacancy_percent = 0.10;
    const repairs_percent = 0.10;
    const property_mgt_percent = 0.10;

    var down_payment = price * down_payment_percent;


    const updateCashNeeded = () => {
      // call helper function to determine cash needed
      const cash_string = getCashNeeded(price, down_payment)
      setCashNeeded(cash_string)
    }

    
    /*
    getMonthlyProfit
    this will be rent + any other payment form
    usually will be just limited to rent
    */
    const getMonthlyProfit = () => {
        return rent;
    }

    /*
    getCashflow
    this will be monthly profit - monthly expenses
    */
    // const getCashflow = () => {
    //   // define principal loan amount
    //   var principal_amount = price - down_payment;
    //   // get monthly expenses with the following two functions
    //   var mortgage_pay = getMortgagePayments(principal_amount, interest_perecent, loan_duration)
    //   var total_expenses = getMonthlyExpenses(price, mortgage_pay, pmi_percent, insurance, tax_percent, vacancy_percent, repairs_percent, property_mgt_percent)

    //   var cash_flow = getMonthlyProfit() - total_expenses;

    //   cash_flow = cash_flow.toPrecision(4);
      
    //   setCashflow(cash_flow);
      
    //   return cash_flow;
    // }


    const updateCashflow = () => {
      // define principal loan amount
      var principal_amount = price - down_payment;
      // get monthly expenses with the following two functions
      var mortgage_pay = getMortgagePayments(principal_amount, interest_perecent, loan_duration)
      var monthly_expenses = getMonthlyExpenses(price, mortgage_pay, pmi_percent, insurance, tax_percent, vacancy_percent, repairs_percent, property_mgt_percent)

      var monthly_profit = getMonthlyProfit();

      var cash_flow = getCashflow(monthly_profit, monthly_expenses)
      console.log('cashflow', cash_flow)
      
      setCashflow(cash_flow);
    }

    /*
    getCashoncash
    this will tell us what kind of return we are get on our investment anually
    you want to shoot for 12%
    the stock market usually performs at 10, so we want to outdo 10%
    but for starting out in Cali, it's ok to get something 6-12%
    to calculate this value, we need to:
        divide the annual cash flow by total initial investment * 100 percent
    */
    const getCashoncash = () => {
        var annual_cashflow = cashflow * 12;

        var cash_on_cash = (annual_cashflow / down_payment) * 100;

        cash_on_cash = cash_on_cash.toPrecision(4);
        
        setCashoncash(cash_on_cash);
    }


    const onPressBtn = () => {
        // getCashflow()
        updateCashflow()
        getCashoncash()
        updateCashNeeded()
    }

    const updateState = (var_name, val) => {
      // first, verify val is a string or number
      if(typeof(val) == 'string'){
        // convert string to number
        parseInt(val)
      }
      else if(typeof(val) == 'number'){
        // do nothing
      }
      
      switch(var_name) {
        case 'price':
          setPrice(val)
          break; // exist out of switch
        case 'rent':
          setRent(val)
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
      }
    ]

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <TitleText
        text='[Real Estate] Analyzer!'
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
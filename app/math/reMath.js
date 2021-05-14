// import helper functions
import { numberWithCommas, stringToNumber, sumElements } from './helpers';


/*  getCashNeeded
    input: price (number), down_payment (number)
    output: total_needed (string)

    Calculate the total cash needed to bring to the table for closing deal
    this can be estimated to be:
        = down payment + closing costs + anticipated repairs + $10,000
*/
function getCashNeeded(price, down_payment){

    // first do error handling
    if(!price || !down_payment){
        console.log('getCashNeeded requires two parameters: price, down_payment')
        return;
    }

    // make sure price and down_payment are numbers
    var price_num = stringToNumber(price)
    var down_payment_num = stringToNumber(down_payment)

    // closing cost is usally 2-5 percent of the total loan amount
    //      var closing_cost = (price - down_payment) * 0.04;
    // or 4% of the total price
    var closing_cost = price_num * 0.04;

    /*
    assume anticipated repairs is 5k. therefore, total cash needed will be:
    down payment + closing costs + 15k
    */
   var total = down_payment_num + closing_cost;
   
    // create string and round to 2 decimals
    // total = total.toFixed(2);
    // add commas to string
    // total_needed = numberWithCommas(total);

   return total;
}


/*  getMonthlyExpenses
    input:
        price (number),
        mortgage (number),
        pmi_percent (number),
        vacancy_percent (number),
        repairs_percent (number),
        property_mgt_percent (number)
    output:
        monthly_expenses (string)

    = taxes + insurance + vacancy percentage + repairs + property management
        + mortgage payments + PMI
    */
function getMonthlyExpenses(
    price,
    mortgage,
    pmi_percent,
    insurance,
    tax_percent,
    vacancy_percent,
    repairs_percent,
    property_mgt_percent,
    capex_monthly
    ) {

    // define monthly expenses
    var insurance_monthly = insurance/12;
    var pmi_monthly = (pmi_percent * price)/12;
    var taxes_monthly = (tax_percent * price)/12;
    var vacancy_monthly = vacancy_percent/12;
    var repairs_monthly = repairs_percent/12;
    var property_mgt_monthly = property_mgt_percent/12;
    
    var expenses = [
        insurance_monthly,
        pmi_monthly,
        taxes_monthly,
        vacancy_monthly,
        repairs_monthly,
        property_mgt_monthly,
        capex_monthly
    ];
    
    // call helper function to add up expenses
    var other_expenses = sumElements(expenses);

    var total_expenses = mortgage + other_expenses;

    return total_expenses;
}


/*
    getMortgagePayments
    input:
        principal_amount (number)
        interest_percent (number),
        loan_duration (number),
    output:
        mortgage_pay (number)

    mortgage payments = M
    M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
    P = principal loan amount
    i = monthly interest rate
    n = number of months required to repay the loan
*/
function getMortgagePayments(principal_amount, interest_percent, loan_duration){
    var mortgage_pay;

    // define monthly interest rate
    var monthly_interest = interest_percent / 12;
    
    //define number of months required to pay loan
    var number_of_months = loan_duration * 12;

    // define temp variable for redability and to ensure PEMDAS math
    let temp = monthly_interest + 1;
    temp = temp ^ number_of_months;
    temp = temp * monthly_interest;
    let top_half = temp;

    let bottom_half = ((1+monthly_interest)^number_of_months) - 1;

    mortgage_pay = principal_amount * (top_half / bottom_half);

    return mortgage_pay;
}


/* getCashflow
    input: monthly_expenses (number), monthly_profit (number)
    return: cash_flow (number)
    this will be monthly profit - monthly expenses
*/
function getCashflow(monthly_profit, monthly_expenses){

    var cash_flow = monthly_profit - monthly_expenses;

    cash_flow = cash_flow.toPrecision(4);

    return cash_flow;
}


/* getCashoncash
    input:  cashflow(number), down_payment (number)
    output: cash_on_cash (number)

this will tell us what kind of return we are get on our investment anually
you want to shoot for 12%
the stock market usually performs at 10, so we want to outdo 10%
but for starting out in Cali, it's ok to get something 6-12%
to calculate this value, we need to:
    divide the annual cash flow by total initial investment * 100 percent
*/
function getCashoncash(cashflow, down_payment) {
    console.log('cashflow', cashflow)
    console.log('down_payment', down_payment)
    var annual_cashflow = cashflow * 12;

    var cash_on_cash = (annual_cashflow / down_payment) * 100;

    cash_on_cash = cash_on_cash.toPrecision(4);

    console.log('cash on cash', cash_on_cash)
    return cash_on_cash
}

export { 
    getCashNeeded,
    getMonthlyExpenses,
    getMortgagePayments,
    getCashflow,
    getCashoncash
}
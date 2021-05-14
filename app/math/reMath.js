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
   total = total.toFixed(2);

   // add commas to string
   total_needed = numberWithCommas(total);

   return total_needed;
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
    property_mgt_percent
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
        property_mgt_monthly
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

export { getCashNeeded, getMonthlyExpenses, getMortgagePayments }
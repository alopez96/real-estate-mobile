// import helper functions
import { numberWithCommas, stringToNumber } from './helpers';

/*
    getCashNeeded
    input: price (number), down_payment (number)
    output: total_needed (number)

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

export { getCashNeeded }
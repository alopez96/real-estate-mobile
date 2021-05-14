/*
    numberWithCommas
    input: x (number)
    output: x(string)
*/
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/*
    stringToNumber
    input: x(string)
    output: x(number)
*/
function stringToNumber(x) {
    // verify x is a string or number
    if(typeof(x) == 'string'){
        // convert string to number
        return parseInt(x)
      }
      else if(typeof(x) == 'number'){
        // do nothing
        return x
      }
      else{
          // do nothing
          return x
      }
}


// add up the elements in an array to get sum
function sumElements(arr){
    return arr.reduce((a, b) => a + b, 0)
}


export { numberWithCommas, stringToNumber, sumElements }
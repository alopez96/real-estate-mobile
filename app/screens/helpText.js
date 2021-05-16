// text for help screen on home page
const helpTextHome = 
'This app will help you analyze Real estate properties. The Invest page will calculate the following:\n\n'
+'1. Cash needed to purchase the property. This includes down payment and closing costs. On top of the amount given by app, we recommend also adding expected repair expenses, and 10-15,000 for buffer.\n\n'
+'2. Monthly cashflow that you can expect from the property. Cash flow is given by taking the income produced by the property (rent) minus the expenses on the property. The following numbers are asssumed:\n'
+'tax_percent = 0.75%\n'
+'insurance = $2500\n'
+'pmi_percent = 1.0%\n'
+'vacancy_percent = 10%\n'
+'repairs_percent = 10%\n'
+'property_mgt_percent = 10%\n'
+'capex_monthly = $200\n\n'
+'3. Cash on cash represents your annual return on investment. This is calculated by taking the estimated yearly cash flow and diving it by the initial money invested.'


// text for help screen on shop page
const helpTextShop = 
'This app will help you analyze Real estate properties. The Rental page will run the 1 or 2 percent rule/test.\n\n'
+'The 1% rule takes the expected rental income and divides it by the total price of the property.\n\n'
+'For example, if you want to buy a house for 100,000 and it will rent for 1,000 that equals 1%. This example meets the 1% test, but falls short of 2%.\n\n'
+'Anything less than 1% will likely not generate any cashflow.\n'
+'Anything between 1-2 percent will be decent cashflow. This is a good target to shoot for.\n'
+'Anything more than 2% will definately generate cashflow (as a beginer, be wary of these - usually not a good sign).\n\n'
+'Overall, the 2% percent rule will not fit every market, but it is a quick and dirty way to scan a property. If something falls within or near 1-2 it can warant further analyzing.'


export { helpTextHome, helpTextShop };
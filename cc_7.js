//Task 1
const calculateInvoice = (subtotal, taxRate, discount) => {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    console.log(`Total Invoice: $${total.toFixed(2)}`);   // calculates total invoice after tax and discount

}

//Task 2
const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlywage= salary / (hoursPerWeek * 52);
    console.log (`Hourly wage: $${hourlywage.toFixed(2)}`);  // calculates hourly wage from salary and hours per week
}



//Task 1

function calculateInvoice(subtotal, taxRate, discount) {
    let totalAmount = ((subtotal + (subtotal * taxRate)) - discount).toFixed(2);
    console.log(`Total Invoice: $${totalAmount}`);
}

//Test Data
calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"



//Task 2
const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlywage = salary / (hoursPerWeek * 52);
    console.log(`Hourly wage: $${hourlywage.toFixed(2)}`);  // calculates hourly wage from salary and hours per week
}

//Test Data
calculateHourlyWage(52000, 40); // Expected output: "Hourly Wage: $25.00"
calculateHourlyWage(75000, 35); // Expected output: "Hourly Wage: $41.21"



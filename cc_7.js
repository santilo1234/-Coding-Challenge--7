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


//Task 3
const calculateLoyaltyDiscount = (amount, years) => {
    let discountRate = years >= 5 ? 0.15 : years >= 2 ? 0.10 : 0.05;
    let discountedPrice = amount * (1 - discountRate);
    console.log(`Discounted Price: $${discountedPrice.toFixed(2)}`); // calculates discounted price based on years of loyalty
}

//Test Data
calculateLoyaltyDiscount(100, 6); // Expected output: "Discounted Price: $85.00"
calculateLoyaltyDiscount(200, 2); // Expected output: "Discounted Price: $190.00"





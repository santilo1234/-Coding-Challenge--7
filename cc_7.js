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


//Task 4
const calculateShippingCost = (weight, location, expedited = false) => {
    let baseCost = location === "USA" ? 5 + (0.5 * weight) : 10 + (0.7 * weight);
    if (expedited) baseCost += 10;
    console.log(`Shipping Cost: $${baseCost.toFixed(2)}`); // calculates shipping cost based on weight, location and if expedited
}

//Test Data
calculateShippingCost(10, "USA", true); // Expected output: "Shipping Cost: $20.00"
calculateShippingCost(5, "Canada", false); // Expected output: "Shipping Cost: $13.50"



//Task 5
const calculateLoanInterest = (principal, rate, years) => {
    let interest = principal * rate * years;
    console.log(`Total Interest: $${interest.toFixed(2)}`); //calculate loan interest over a specific number of years
}


//Test Data
calculateLoanInterest(1000, 0.05, 3); // Expected output: "Total Interest: $150.00"
calculateLoanInterest(5000, 0.07, 5); // Expected output: "Total Interest: $1750.00"



//Task 6
let transaction = [500, 1200, 3000, 800, 2200];
const filterHighValueTransactions = (transactions, filterFunction) => {
    let result = transactions.filter(filterFunction);
    console.log(result); // filters high value transactions based on a filter function
}

//Test Data
let transactions = [500, 1200, 3000, 800, 2200];
filterHighValueTransactions(transactions, amount => amount > 1000);
// Expected output: [1200, 3000, 2200]



//Task 7
const createBudgetTracker = () => {
    let balance = 0;
    return (expense) => {
        balance -= expense;
        console.log(`Current Balance: $${balance.toFixed(2)}`); //Updates budget with each expense
    


        
    };
};

//Test Data
let budget = createBudgetTracker();
budget(300); // Expected output: "Current Balance: -$300"
budget(200); // Expected output: "Current Balance: -$500"



//Task 8
const calculateGrowth = (years, revenue) => {
    if (years === 0){
        console.log(`Projected Revenue: $${revenue.toFixed(2)}`);
        return; // calculates projected revenue over multiple years
    }
}
//Test Data
calculateGrowth(8, 1000); // Expected output: "Projected Revenue: $1102.50"
calculateGrowth(5, 5000); // Expected output: "Projected Revenue: $6381.41"
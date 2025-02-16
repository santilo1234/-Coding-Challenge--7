//Task 1
const calculateInvoice = (subtotal, taxRate, discount) => {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    console.log(`Total Invoice: $${total.toFixed(2)}`);   // calculates total invoice after tax and discount

}





//Task 1

function calculateInvoice(subtotal, taxRate,discount) {
    let totalAmount = ((subtotal + (subtotal * taxRate)) - discount.toFixed(2));
    console.log('Total Invoice: $${totalAmount}');
}

//Test Data
calculateInvoice(100, 0.08, 5); // Expected output: "Total Invoice: $103.00"
calculateInvoice(500, 0.1, 20); // Expected output: "Total Invoice: $530.00"


const customers = [];

export function getCustomers() {
    return customers;
}

export function saveCustomer(customer) {
    const _id = customers.length + 1;

    const user = customers.find(c => c.email === customer.email);

    if (!user) {
        customer._id = _id;
        customers.push(customer);
        return null;
    }
    
    return "Already a user";
}
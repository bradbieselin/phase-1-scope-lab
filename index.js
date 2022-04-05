// Write your solution in this file!
var customerName = "bob";
const bestCustomer = "not bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer() {
    window.bestCustomer = "not bob";
}

function overwriteBestCustomer() {
    window.bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "";

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "bob";
}
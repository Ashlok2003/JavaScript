
function Bank_Account(name, balance = 0) {
    this.name = name;
    this.balance = balance;
}

Bank_Account.prototype.balance = function () {
    return `The Balanced Amount : Rs. ${this.balance}`;
}

Bank_Account.prototype.deposit = function (amount) {
    this.balance = this.balance + amount;
}

Bank_Account.prototype.withdraw = function (amount) {
    if (amount > this.balance)
        return "Insufficient balance";

    this.balance = this.balance - amount;
    return `Remaining Amount : Rs. ${this.balance}`;
}

function Current_Account(customerName, balance = 0) {
    Bank_Account.call(this, customerName, balance);
}

Current_Account.prototype = Object.create(Bank_Account.prototype);

Current_Account.prototype.takeBussinessLoan = function (amount) {
    return `Business Loan of amount : Rs. ${amount}`;
}
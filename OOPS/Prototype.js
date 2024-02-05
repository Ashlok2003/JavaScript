
function Bank(name, balance = 0) {
    this.name = name;
    this.balance = balance;
}

Bank.prototype.deposit = function (amount) {
    this.balance = this.balance + amount;
    return `Updated Balance Amount : Rs. ${this.balance}`;
}

Bank.prototype.withdraw = function (amount) {
    if (amount > this.balance)
        return "Insufficient balance";

    this.balance = this.balance - amount;
    return `Remaining Amount : Rs. ${this.balance}`;
}

Bank.prototype.getBalance = function () {
    return `The Balance Amount : Rs. ${this.balance}`;
}

const ashlok__ = new Bank("Ashlok", 12000);
console.log(ashlok__.getBalance()); 
console.log(ashlok__.deposit(12000));
console.log(ashlok__.withdraw(240));
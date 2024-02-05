class Bank_Account {
    #private_variable;
    static #private_variable_static = 12;

    customerName;
    accountNumber;
    #_balance;


    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Math.floor(Math.random() * 100000000);
        this._balance = balance;
        this.#private_variable = "This is a private variable";
        this.#private_function_2();
    }

    get balance() {
        return `The Balanced Amount : Rs. ${this._balance}`;
    }

    deposit(amount) {
        this._balance = this._balance + amount;
    }

    withdraw(amount) {
        if (amount > this._balance)
            return "Insufficient balance";

        this._balance = this._balance - amount;
        return `Remaining Amount : Rs. ${this._balance}`;
    }

    static #private_function() {
        console.log(`This ${Bank_Account.#private_variable_static}`);
    }

    #private_function_2() {
        console.log(`This is a private function ${this.#private_variable}`);
    }

    setBalanced(amount) {
        if (isNaN(amount))
            throw new Error("Invalid Amount");

        this.#_balance = amount;
    }
}

const ashlok__ = new Bank_Account("Ashlok", 12000);
console.log(ashlok__.balance);

ashlok__.deposit(12000);
console.log(ashlok__.withdraw(240));

ashlok__.setBalanced(120000);

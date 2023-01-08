export class Account {
    balance;
    accountHolder;
    accountNumber;
    password;
    transectionHistory;
    constructor(balance, accountHolder, accountNumber, password, transectionHistory) {
        this.balance = balance;
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.password = password;
        this.transectionHistory = transectionHistory;
    }
    getAccountHolderName() {
        return this.accountHolder;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
    getPassword() {
        return this.password;
    }
    deposit(amount) {
        this.balance += amount;
    }
    getBalance() {
        return this.balance;
    }
    withDraw(amount) {
        if (amount > this.balance) {
            return false;
        }
        this.balance -= amount;
        console.log(`Remaining Balance is ${this.balance}`);
        return true;
    }
    addTransection(transection) {
        this.transectionHistory.push(transection);
    }
    getTransactionHistory() {
        return this.transectionHistory;
    }
}

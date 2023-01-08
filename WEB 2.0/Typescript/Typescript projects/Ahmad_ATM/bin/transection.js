export class Transaction {
    amount;
    type;
    date;
    accountNumber;
    description;
    constructor(amount, type, date, accountNumber, description) {
        this.amount = amount;
        this.type = type;
        this.date = date;
        this.accountNumber = accountNumber;
        this.description = description;
    }
    getDetails() {
        return {
            amount: this.amount,
            type: this.type,
            date: this.date,
            accountNumber: this.accountNumber,
            description: this.description,
        };
    }
    isValidAmount() {
        return this.amount > 0;
    }
    isValidType() {
        return ['deposit', 'withdrawal', 'transfer'].includes(this.type);
    }
    getFormattedDate() {
        return this.date.toLocaleDateString();
    }
    calculateBalance(currentBalance) {
        if (this.type === 'deposit') {
            return currentBalance + this.amount;
        }
        else if (this.type === 'withdrawal') {
            return currentBalance - this.amount;
        }
        else {
            return currentBalance;
        }
    }
}

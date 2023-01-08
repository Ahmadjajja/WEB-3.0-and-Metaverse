export class ATM {
    accounts;
    currentAccount;
    transactions;
    constructor(accounts, currentAccount, transactions) {
        this.accounts = accounts;
        this.currentAccount = currentAccount;
        this.transactions = transactions;
    }
    findAccount(accountNumber) {
        for (let account of this.accounts) {
            if (account.getAccountNumber() === accountNumber) {
                return account;
            }
        }
        return null;
    }
    login(accountNumber, password) {
        // Check if the account number is valid
        let account = this.findAccount(accountNumber);
        if (!account) {
            return false;
        }
        // Check if the password is correct
        if (account.getPassword() !== password) {
            return false;
        }
        // If the account number and password are correct, set the currentAccount property to the Account object and return true
        this.currentAccount = account;
        return true;
    }
    logout() {
        this.currentAccount = null;
    }
    getBalance() {
        if (!this.currentAccount) {
            throw new Error("No account is logged in.");
        }
        return this.currentAccount.getBalance();
    }
    deposit(amount) {
        if (!this.currentAccount) {
            throw new Error("No account is logged in.");
        }
        this.currentAccount.deposit(amount);
    }
    withdraw(amount) {
        if (!this.currentAccount) {
            throw new Error('No account is logged in.');
        }
        return this.currentAccount.withDraw(amount);
    }
}

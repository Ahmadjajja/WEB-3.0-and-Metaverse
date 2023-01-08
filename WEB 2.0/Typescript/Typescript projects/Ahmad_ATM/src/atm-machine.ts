import { Account } from "./Account.js";
import { User } from "./User.js";
import { Transaction } from "./transection.js";

export class ATM {
  constructor(
    public accounts: Account[],
    public currentAccount: Account | null,
    public transactions: Transaction[],
  ) {}
  private findAccount(accountNumber: string): Account | null {
    for (let account of this.accounts) {
      if (account.getAccountNumber() === accountNumber) {
        return account;
      }
    }
    return null;
  }

  public login(accountNumber: string, password: string): boolean {
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
  public logout(): void {
    this.currentAccount = null;
  }
  public getBalance(): number {
    if (!this.currentAccount) {
      throw new Error("No account is logged in.");
    }

    return this.currentAccount.getBalance();
  }
  public deposit(amount: number): void {
    if (!this.currentAccount) {
      throw new Error("No account is logged in.");
    }

    this.currentAccount.deposit(amount);
  }
  public withdraw(amount: number): boolean {
    if (!this.currentAccount) {
      throw new Error('No account is logged in.');
    }

    return this.currentAccount.withDraw(amount);
  }
}

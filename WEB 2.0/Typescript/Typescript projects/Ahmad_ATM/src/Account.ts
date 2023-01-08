import { Transaction } from "./transection.js";
export class Account {
  constructor(
    private balance: number,
    private accountHolder: string,
    private accountNumber: string,
    private password: string,
    private transectionHistory: Transaction[]
  ) {}
  public getAccountHolderName(): string {
    return this.accountHolder;
  }
  public getAccountNumber(): string {
    return this.accountNumber;
  }
  public getPassword(): string {
    return this.password;
  }  
  public deposit(amount: number): void {
    this.balance += amount;
  }
  public getBalance(): number {
    return this.balance;
  }
  public withDraw(amount: number): boolean {
    if (amount > this.balance) {
      return false;
    }
    this.balance -= amount;
    console.log(`Remaining Balance is ${this.balance}`);
    return true;
  }
  public addTransection(transection: Transaction): void {
    this.transectionHistory.push(transection);
  }
  public getTransactionHistory(): Transaction[] {
    return this.transectionHistory;
  }
}

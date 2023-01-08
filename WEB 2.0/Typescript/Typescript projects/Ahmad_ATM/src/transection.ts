export class Transaction {
  constructor(
    public amount: number,
    public type: string,
    public date: Date,
    public accountNumber: string,
    public description: string
  ){}
  public getDetails(): object {
    return {
      amount: this.amount,
      type: this.type,
      date: this.date,
      accountNumber: this.accountNumber,
      description: this.description,
    };
  }
  public isValidAmount(): boolean {
    return this.amount > 0;
  }

  public isValidType(): boolean {
    return ['deposit', 'withdrawal', 'transfer'].includes(this.type);
  }
  public getFormattedDate(): string {
    return this.date.toLocaleDateString();
  }
  public calculateBalance(currentBalance: number): number {
    if (this.type === 'deposit') {
      return currentBalance + this.amount;
    } else if (this.type === 'withdrawal') {
      return currentBalance - this.amount;
    } else {
      return currentBalance;
    }
  }
  
  
}

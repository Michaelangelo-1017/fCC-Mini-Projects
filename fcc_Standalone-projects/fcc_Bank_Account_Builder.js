//class
class BankAccount{
  constructor(){
    this.balance = 0;
    this.transactions = [];
  }
  deposit(amount){
    const isAmountString = typeof amount === "string" ? true : false;
    const amountNo = Number(amount);
    console.log(`Number conversion : ${amountNo}`)
    if(Number.isNaN(amountNo)){
      return `Your value [${amount}] is not a number`
    }
    if(isAmountString){
      if(amount.includes("e")){
        return `Your amount must not include an e`
      }
    }
    if(amountNo > 0){
      const transactionObj = {
        type: "deposit",
        amount: amountNo
      }
      this.transactions.push(transactionObj);
      this.balance = Number((this.balance) + Number(amountNo.toFixed(2)));
      console.log(this.balance, typeof this.balance)
      return `Successfully deposited $${amount}. New balance: $${this.balance}`
    }
    else{
      return "Deposit amount must be greater than zero."
    }
  }
  withdraw(amount){
    const isAmountString = typeof amount === "string" ? true : false;
    const amountNo = Number(amount);
    console.log(`Number conversion : ${amountNo}`);
    if(Number.isNaN(amountNo)){
      return `Your value [${amount}] is not a number`
    }
    if(isAmountString){
      if(amount.includes("e")){
        return `Your amount must not include an e`
      }
    }
    if(amountNo > 0 && amountNo <= this.balance){
      const transactionObj = {
        type: "withdraw",
        amount: amountNo
      }
      this.transactions.push(transactionObj);
      this.balance = Number((this.balance) - Number(amountNo.toFixed(2)));
      console.log(this.balance, typeof this.balance)
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    }
    else{
      return "Insufficient balance or invalid amount."
    }
  }
  checkBalance(){
    return `Current balance: $${this.balance}`
  }
  listAllDeposits(){
    let depositsString = "Deposits: ";
    const depositsArr = this.transactions.filter((item)=> item.type === "deposit");
    let depAmtArr = []
    for(const dep of depositsArr){
      depAmtArr.push(dep.amount)
    }
    console.log(depAmtArr)
    depositsString += `${depAmtArr.join(",")}`
    return depositsString 
  }
  listAllWithdrawals(){
    let withdrawalsString = "Withdrawals: ";
    const withdrawalsArr = this.transactions.filter((item)=> item.type === "withdraw");
    let witAmtArr = []
    for(const wit of withdrawalsArr){
      witAmtArr.push(wit.amount)
      
    }
    withdrawalsString += `${witAmtArr.join(",")}`
    return withdrawalsString 
  }
}

//Testing block
const myAccount = new BankAccount;
console.log(myAccount);
myAccount.deposit(100);
console.log(myAccount.deposit(100))
myAccount.withdraw(100);
myAccount.deposit(300);
myAccount.withdraw(250);
myAccount.deposit(590.99);
myAccount.withdraw(170.99);
console.log(myAccount.checkBalance())
console.log(myAccount.listAllDeposits())
console.log(myAccount.listAllWithdrawals())
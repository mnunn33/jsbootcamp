const account = {
    name: 'Mike Nunn',
    expenses: [],
    income:[],
    addExpense: function(description, amount){
       this.expenses.push({description: description,
         amount:amount});
    },
    addIncome: function(description, amount){
        this.income.push({ description: description, 
            amount:amount});
    },
    getAccountSummary: function(){
        let totalExpenses = 0;
        let totalIncome = 0;    
           this.expenses.forEach(function(expense){
               totalExpenses = totalExpenses +expense.amount;
           })
           this.income.forEach(function(income){
             totalIncome = totalIncome + income.amount;
           })
           
      return ` ${this.name} has a balance $${totalIncome- totalExpenses}. $${totalIncome} in income and $${totalExpenses} in expenses`;
        
    }
    
}



account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addExpense('Movies',5);
account.addIncome('Job',1000);
console.log(account.getAccountSummary());
//console.log(account.expenses);

 
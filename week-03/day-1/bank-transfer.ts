'use strict';

const accounts: any[] = [
    { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
    { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
    { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

function getNameAndBalance(list: number) {
    let outCome = [];
    for(let i = 0; i < accounts.length; i++){

        if(accounts[i].accountNumber === list){
            outCome.push(accounts[i].clientName);
            outCome.push(accounts[i].balance);
        }
    }
return outCome;
}

/*console.log(getNameAndBalance(11234543));
console.log(getNameAndBalance(43546731));
console.log(getNameAndBalance(23456311));
*/

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function transferAmount(account: any[], fromAccount: number, toAccount: number, amountOfCash: number): any {

    let accountNumbers: number[] = [];

    for (let i = 0; i < accountNumbers.length; i++) {
        accountNumbers.push(account[i].accountNumber);
    }
    for (let j = 0; j < account.length; j++) {
        
    
    if (account[j].accountNumber === fromAccount) {
        account[j].balance -= amountOfCash;
    }else if(account[j].accountNumber === toAccount) {
        account[j].balance += amountOfCash;
    }
}}

transferAmount(accounts, 43546731, 23456311, 500.0);
console.log(accounts);


export = {
  getNameAndBalance,
transferAmount,
  accounts
};
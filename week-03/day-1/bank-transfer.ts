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
            outCome.push(accounts[i].balance)

        }
    }return outCome;
}

console.log(getNameAndBalance(11234543));
console.log(getNameAndBalance(43546731));
console.log(getNameAndBalance(23456311));

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function transferAmount(accounts: any, fromAccountNumber: number [], toAccountNumber: number [], amount: number [] ): any{

    let transfer: number [] = 0;

    for(let i = 0; i < accounts.length; i++){

        if(accounts[i].accountNumber === toAccountNumber){

            accounts[i].balance = accounts[i].balance + + amount;
            transfer.push(accounts[i].accountNumber)

        }else if(accounts[i].accountNumber === fromAccountNumber){
            accounts[i].balance = accounts[i].balance - - amount;
            transfer.push(accounts[i].accountNumber)
            
        }else {
            console.log("404 - account not found");
        }

return transfer;

    };





transferAmount(accounts, 43546731, 23456311, 500.0);











// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

export = {
  getNameAndBalance,
transferAmount,
  accounts
};
const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('6d7a66dafc3e6dbf328bc14ef609ba310964941ded40c12fa079f9020eb7609d');
const myWalletAddress = myKey.getPublic('hex');

let myCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
myCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
myCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of my wallet is', myCoin.getBalanceOfAddress(myWalletAddress));

//myCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid? ', myCoin.isChainValid());

console.log(myCoin.chain);
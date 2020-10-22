// setup server
var express = require('express')
var app = express();

var low = require('lowdb')
var fs = require('lowdb/adapters/FileSync')
var adapter = new fs('db.json')
var db = low(adapter)

// setup directory used to serve static files
app.use(express.static('public'));

// setup data store
db.defaults({ accounts: []}).write();

app.listen(3000, function(){
    console.log('Running on Port 3000')
});

// required data store structure
/*
{ 
    accounts:[
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: []}
    ] 
}
*/
/*db.get('accounts')
    .push({name :'Prab', email :'prab@mit.edu', balance :1000, password :'test', transactions : []})
    .write()

db.get('accounts')
    .push({name :'spy', email :'spy@hiding.com', balance :100000, password :'test2', transactions : []})
    .write()*/


app.get('/account/create/:name/:email/:password', function (req, res) {

    // YOUR CODE
    // Create account route
    // return success or failure string
    var account = {
        "name" : req.params.name,
        "email" : req.params.email,
        "balance" : 0,
        "password" : req.params.password,
        "transactions" : []
    };

    db.get('accounts').push(account).write();
    console.log('Account successfully created!')
});

app.get('/account/login/:email/:password', function (req, res) {

    // YOUR CODE
    // Login user - confirm credentials
    // If success, return account object    
    // If fail, return null
    var login_email = db.get('accounts').find({email : req.params.email}).value();
    if(login_email == null){
        console.log("Name Does not exist in Database")
    } else if (login_email.password == req.params.password){
        console.log('Login Confirmed! Find the details below')
        console.log(login_email.email)
    } else {
        console.log("Password Incorrect")
    }
});

app.get('/account/get/:email', function (req, res) {

    // YOUR CODE
    // Return account based on email
    var login_email = db.get('accounts').find({email : req.params.email}).value();
    if(login_email == null){
        console.log("Name Does not exist in Database");
    } else {
        console.log('Please find the Balance below')
        console.log(login_email.balance);
    }
});

app.get('/account/deposit/:email/:amount', function (req, res) {

    // YOUR CODE
    // Deposit amount for email
    // return success or failure string
    var login_email = db.get('accounts').find({email : req.params.email}).value();
    if(login_email == null){
        console.log("Name Does not exist in Database");
    } else {
        var total_val = parseInt(login_email.balance)+ parseInt(req.params.amount);
        db.get('accounts').find({email : req.params.email}).assign({balance: total_val}).write();
        
        var trans = db.get('accounts').find({email : req.params.email}).get('transactions').value();
        var text_trans = "Deposit:" + (req.params.amount) + ' -> Total Value:' + total_val 
        trans.push(text_trans);
        db.get('accounts').find({email : req.params.email}).assign({transactions : trans}).write();

        console.log(login_email.email)
        console.log(text_trans)
    }
});

app.get('/account/withdraw/:email/:amount', function (req, res) {

    // YOUR CODE
    // Withdraw amount for email
    // return success or failure string
    var login_email = db.get('accounts').find({email : req.params.email}).value();
    if(login_email == null){
        console.log("Name Does not exist in Database");
    } else {
        var total_val = parseInt(login_email.balance) - parseInt(req.params.amount);
        db.get('accounts').find({email : req.params.email}).assign({balance: total_val}).write();

        var trans = db.get('accounts').find({email : req.params.email}).get('transactions').value();
        var text_trans = "Withdraw:" + (req.params.amount) + ' -> Total Value:' + total_val 
        trans.push(text_trans);
        db.get('accounts').find({email : req.params.email}).assign({transactions : trans}).write();

        console.log(login_email.email)
        console.log(text_trans)
    }
});

app.get('/account/transactions/:email', function (req, res) {

    // YOUR CODE
    // Return all transactions for account
    var login_email = db.get('accounts').find({email : req.params.email}).value();
    if(login_email == null){
        console.log("Name Does not exist in Database");
    } else {
        console.log('Please find the transactions below')
        console.log(login_email.transactions);
    }
});

app.get('/account/all', function (req, res) {

    // YOUR CODE
    // Return data for all accounts
    console.log(db.get('accounts').value());
});

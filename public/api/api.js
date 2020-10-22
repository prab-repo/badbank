
function create() {
    // -------------------------------------
    //  YOUR CODE
    //  Create user account on server
    // -------------------------------------   
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value
    
    var url = '/account/create/' + name + '/' + email + '/' + password;
    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
            } else{
                console.log(res);
            }
        });
}

function login() {
    // -------------------------------------
    //  YOUR CODE
    //  Confirm credentials on server
    // -------------------------------------
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value
    var url_login = '/account/login/' + email + '/' + password;
    console.log(url_login)
    superagent
        .get(url_login)
        .end(function(err, res){
            if(err){
                console.log(err);
            } else{
                console.log(res);
            }
        });
}

function deposit() {
    // -------------------------------------
    //  YOUR CODE
    //  Deposit funds user funds on server
    // -------------------------------------
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value
    var url_login = '/account/deposit/' + email + '/' + amount;
    console.log(url_login)
    superagent
        .get(url_login)
        .end(function(err, res){
            if(err){
                console.log(err);
            } else{
                console.log(res);
            }
        });
}

function withdraw() {
    // -------------------------------------
    //  YOUR CODE
    //  Withdraw funds user funds on server
    // -------------------------------------
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value
    var url_login = '/account/withdraw/' + email + '/' + amount;
    console.log(url_login)
    superagent
        .get(url_login)
        .end(function(err, res){
            if(err){
                console.log(err);
            } else{
                console.log(res);
            }
        });
}

function transactions() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all user transactions
    // -------------------------------------
    var email = document.getElementById('email').value;
    var url_login = '/account/transactions/' + email;
    console.log(url_login)
    superagent
        .get(url_login)
        .end(function(err, res){
            if(err){
                console.log(err);
            } else{
                console.log(res);
            }
        });
}

function balance() {
    // -------------------------------------
    //  YOUR CODE
    //  Get user balance
    // -------------------------------------
    var email = document.getElementById('email').value;
    var url_login = '/account/get/' + email;
    console.log(url_login)
    superagent
        .get(url_login)
        .end(function(err, res){
            if(err){
                console.log(err);
            } else{
                console.log(res);
            }
        });
}

function allData() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all data
    // -------------------------------------
    var url_login = '/account/all';
    console.log(url_login)
    superagent
        .get(url_login)
        .end(function(err, res){
            if(err){
                console.log(err);
            } else{
                console.log(res);
            }
        });
}


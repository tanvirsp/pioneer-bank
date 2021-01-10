//login handelar
const loginButton = document.getElementById('login');
loginButton.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';

    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
});



// Deposite Event handelar
    const addDeposit = document.getElementById('addDeposit');
    addDeposit.addEventListener('click', function(){

        const inputNumber = inputValue('depositAmount')
           
        balanceDisplay('currentDeposit', inputNumber);
        balanceDisplay('currentBalance', inputNumber);

        document.getElementById('depositAmount').value = '';
    })



    // Withdraw Event handelar
    const withdraw = document.getElementById('withdraw');
    withdraw.addEventListener('click', function(){

        const inputNumber = inputValue('withdrawAmount')
           
        balanceDisplay('currentWithdraw', inputNumber);
        balanceDisplay('currentBalance', -1* inputNumber);

        document.getElementById('withdrawAmount').value = '';
    })








    function inputValue(id){
        const amount = document.getElementById(id).value;
        if(amount <= 0 ){
            alert("Please Put Valid Amount")
            return 0;
        } else {const amountToNumber = parseFloat(amount);
            return amountToNumber;
            
        } 
        
    }



    function balanceDisplay(id, inputNumber){
        const amount = document.getElementById(id).innerText;
        const amountToNumber = parseFloat(amount);
        const totalBalance =  inputNumber + amountToNumber;
        document.getElementById(id).innerText = totalBalance;
    }



//login handelar
const loginButton = document.getElementById('login');
loginButton.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
});



const addDeposit = document.getElementById('addDeposit');
    addDeposit.addEventListener('click', function(){


        const depositAmount = document.getElementById('depositAmount').value;
        const depositAmountNumber = parseFloat(depositAmount);
        

        balanceDisplay('currentDeposit', depositAmountNumber);
        balanceDisplay('currentBalance', depositAmountNumber);

        // const currentDeposit = document.getElementById('currentDeposit').innerText;
        // const newDepositNumber = parseFloat(currentDeposit);
        // const totalDeposit = depositAmountNumber + newDepositNumber;
        // document.getElementById('currentDeposit').innerText = totalDeposit;



        //current Balance
        

        // const currentBalance = document.getElementById('currentBalance').innerText;
        // const currentBalanceNumber = parseFloat(currentBalance);
        // const totalBalance =  depositAmountNumber + currentBalanceNumber;
        // document.getElementById('currentBalance').innerText = totalBalance;




        document.getElementById('depositAmount').value = '';
    })



    function balanceDisplay(id, inputNumber){
        const amount = document.getElementById(id).innerText;
        const amountToNumber = parseFloat(amount);
        const totalBalance =  inputNumber + amountToNumber;
        document.getElementById(id).innerText = totalBalance;
    }



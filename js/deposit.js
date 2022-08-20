// getting input by functions
function getInputById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputNumber = parseFloat(inputField.value);
    inputField.value = '';
    return inputNumber;
}

//geting balance info like deposit withdrow and total balance
function getBalanceInfo(balacneId) {
    const balanceTag = document.getElementById(balacneId);
    const blalanceString = balanceTag.innerText;
    const balanceInNumber = parseFloat(blalanceString);
    return balanceInNumber;
}

// set new value in web by function 
function setValueById(getValue, setValue) {
    const getValueText = document.getElementById(getValue);
    getValueText.innerText = setValue;
}

// creat deposit click event
document.getElementById('dep-btn').addEventListener('click', function () {
    // new deposit amount 
    const depositAmount = getInputById('depo-field');

    // previous deposite amount 
    const oldDepositAmout = getBalanceInfo('old-depo');

    // getting total balance 
    const totalBalance = getBalanceInfo('total-balance');

    // validating inpute 
    if (isNaN(depositAmount) == false && depositAmount > 0) {

        // total deposite balance
        const totalDepost = oldDepositAmout + depositAmount;

        // after depostt newTotal balance 
        newTotalBalance = totalBalance + depositAmount;

        // update new deposite in web
        setValueById('old-depo', totalDepost);

        // update new total balance in web
        setValueById('total-balance', newTotalBalance);

    }
    else {
        alert('Please Input Positive Number');
    }
});
// withdrow function 

document.getElementById('with-btn').addEventListener('click', function () {

    // new withdrow amount 
    const nowWithdrowAmount = getInputById('withd-field');

    // previous withdrow amount 
    const oldWithdrowAmount = getBalanceInfo('with-text');

    // getting totalbalance 
    const totalBalance = getBalanceInfo('total-balance');

    // validate input
    if (isNaN(nowWithdrowAmount) == false && nowWithdrowAmount > 0 && nowWithdrowAmount <= totalBalance ) {
        // total blance after withdrow
        const totalBalanceRemaining = totalBalance - nowWithdrowAmount;

        // update new total balance
        setValueById('total-balance', totalBalanceRemaining);

        // total withdrow balance 
        const totalDepostBalance = oldWithdrowAmount + nowWithdrowAmount;

        // update new withdrow balance 
        setValueById('with-text', totalDepostBalance);
    }
    else {
        alert('Something went wrong !!!');
    }

})





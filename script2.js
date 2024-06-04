document.getElementById('Btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-Field');
    if (isNaN(newDepositAmount) || newDepositAmount <= 0) {
        alert("Please enter a valid deposit amount");
        return;
    }
    const previousDepositTotal = getElementValueById('deposit-total');
    const deposit = newDepositAmount + previousDepositTotal;
    setTextElementValue('deposit-total', deposit);

    const previousBalanceTotal = getElementValueById('Balance-total');
    const currentBalance = previousBalanceTotal + newDepositAmount;
    setTextElementValue('Balance-total', currentBalance);
});

document.getElementById('Btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-Field');
    if (isNaN(newWithdrawAmount) || newWithdrawAmount <= 0) {
        alert("Please enter a valid withdrawal amount");
        return;
    }
    const previousWithdrawTotal = getElementValueById('Withdraw-total');
    const previousBalanceTotal = getElementValueById('Balance-total');

    if (newWithdrawAmount > previousBalanceTotal) {
        alert("Insufficient balance for this withdrawal");
        return;
    }

    const withdraw = newWithdrawAmount + previousWithdrawTotal;
    setTextElementValue('Withdraw-total', withdraw);

    const balanceNow = previousBalanceTotal - newWithdrawAmount;
    setTextElementValue('Balance-total', balanceNow);
});

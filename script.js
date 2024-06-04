// Deposit functionality
document.getElementById('Btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-Field');
    const newDepositAmountStrValue = depositField.value;
    const newDepositAmountValue = parseFloat(newDepositAmountStrValue);

    if (isNaN(newDepositAmountValue) || newDepositAmountValue <= 0) {
        alert("Please enter a valid deposit amount");
        return;
    }

    depositField.value = '';

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalStr = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalStr);

    const newDepositTotal = previousDepositTotal + newDepositAmountValue;
    depositTotalElement.innerText = newDepositTotal;

    const balanceTotalElement = document.getElementById('Balance-total');
    const previousBalanceTotalStr = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalStr);

    const newBalanceTotal = previousBalanceTotal + newDepositAmountValue;
    balanceTotalElement.innerText = newBalanceTotal;
});

// Withdraw functionality
document.getElementById('Btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-Field');
    const newWithdrawAmountStrValue = withdrawField.value;
    const newWithdrawAmountValue = parseFloat(newWithdrawAmountStrValue);

    if (isNaN(newWithdrawAmountValue) || newWithdrawAmountValue <= 0) {
        alert("Please enter a valid withdraw amount");
        return;
    }

    withdrawField.value = '';

    const balanceTotalElement = document.getElementById('Balance-total');
    const previousBalanceTotalStr = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalStr);

    if (newWithdrawAmountValue > previousBalanceTotal) {
        alert("Insufficient balance for this withdrawal");
        return;
    }

    const withdrawTotalElement = document.getElementById('Withdraw-total');
    const previousWithdrawTotalStr = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalStr);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmountValue;
    withdrawTotalElement.innerText = newWithdrawTotal;

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmountValue;
    balanceTotalElement.innerText = newBalanceTotal;
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueStr = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueStr);
    inputField.value = ''; 
    return inputFieldValue;
}

function getDisplayValueById(displayId) {
    const displayField = document.getElementById(displayId);
    const displayFieldValueStr = displayField.innerText;
    const displayFieldValue = parseFloat(displayFieldValueStr);
    return displayFieldValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;  // Format value to 2 decimal places
}

// Deposit Button Event Listener
document.getElementById('Btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-Field');

    if (isNaN(newDepositAmount) || newDepositAmount <= 0) {
        alert("Please enter a valid deposit amount");
        return;
    }

    const currentDepositTotal = getDisplayValueById('deposit-total');
    const newDepositTotal = currentDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal);

    const previousBalanceTotal = getDisplayValueById('Balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('Balance-total', newBalanceTotal);
});

// Withdraw Button Event Listener
document.getElementById('Btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-Field');

    if (isNaN(newWithdrawAmount) || newWithdrawAmount <= 0) {
        alert("Please enter a valid withdraw amount");
        return;
    }

    const previousBalanceTotal = getDisplayValueById('Balance-total');

    if (newWithdrawAmount > previousBalanceTotal) {
        alert("Insufficient balance for this withdrawal");
        return;
    }

    const currentWithdrawTotal = getDisplayValueById('Withdraw-total');
    const newWithdrawTotal = currentWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('Withdraw-total', newWithdrawTotal);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('Balance-total', newBalanceTotal);
});

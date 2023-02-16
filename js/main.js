document.getElementById('btn-calculate').addEventListener('click', function(){
    const totalIncomeInput = getInputValueById('total-income');
    const totalFoodCost = getInputValueById('food-cost');
    const totalRentCost = getInputValueById('rent-cost');
    const totalClothesCost = getInputValueById('clothes-cost');

    const totalCost = totalFoodCost + totalRentCost + totalClothesCost;

    const remainingBalance = totalIncomeInput - totalCost;

    const expenses = document.getElementById('total-cost');
    expenses.innerText = totalCost;

    const balance = document.getElementById('remaining-balance');
    balance.innerText = remainingBalance;

    

})

document.getElementById('btn-saving').addEventListener('click', function(){
 
    const savingAmount = getInputValueById('saving-amount');

    const remainingBalance = document.getElementById('remaining-balance');
    const remainingBalanceValueString = remainingBalance.innerText;
    const remainingBalanceValue = parseInt(remainingBalanceValueString);

    const value = savingAmount/100;
    const savingAmountValue = remainingBalanceValue * value;
    
    const savingValue = document.getElementById('saving');
    savingValue.innerText = savingAmountValue;

    const balance = remainingBalanceValue - savingAmountValue;

    const remBalance = document.getElementById('rem-balance');
    remBalance.innerText = balance;

})


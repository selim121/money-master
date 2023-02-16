document.getElementById('btn-calculate').addEventListener('click', function(){
    const totalIncomeInput = getInputValueById('total-income');
    const totalFoodCost = getInputValueById('food-cost');
    const totalRentCost = getInputValueById('rent-cost');
    const totalClothesCost = getInputValueById('clothes-cost');

    const totalCost = totalFoodCost + totalRentCost + totalClothesCost;
    
    const remainingBalance = totalIncomeInput - totalCost;

    if(totalIncomeInput < 0 || totalFoodCost < 0 || totalRentCost < 0 || totalClothesCost < 0 || remainingBalance < 0){
        alert ('Please enter valid amount.');
        return;
    }

    const expenses = document.getElementById('total-cost');
    expenses.innerText = totalCost;

    const balance = document.getElementById('remaining-balance');
    balance.innerText = remainingBalance;




})

document.getElementById('btn-saving').addEventListener('click', function(){
 
    const savingAmount = getInputValueById('saving-amount');

    const remainingBalance = getTextValueById('remaining-balance');

    const value = savingAmount/100;
    const savingAmountValue = remainingBalance * value;
    
    const savingValue = document.getElementById('saving');
    savingValue.innerText = savingAmountValue;

    const balance = remainingBalance - savingAmountValue;

    const remBalance = document.getElementById('rem-balance');
    remBalance.innerText = balance;

    if(balance < 0 || savingAmount < 0 || value < 0){
        alert ('Please enter valid amount.');
        return 0;
    }else{
        savingAmount.innerText = '';
    }
})


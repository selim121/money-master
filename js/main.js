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
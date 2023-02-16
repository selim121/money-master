function getInputValueById(elementId) {
    const getInputValue = document.getElementById(elementId);
    const inputValueString = getInputValue.value;
    const inputValue = parseInt(inputValueString);
    if (isNaN(inputValue)) {
        alert('Please enter valid number');
        return 0;
    } else {
        getInputValue.value = '';
        return inputValue;
    }
}

function getTextValueById(elementId) {
    const getInputValue = document.getElementById(elementId);
    const inputValueString = getInputValue.innerText;
    const inputValue = parseInt(inputValueString);
    return inputValue;
}
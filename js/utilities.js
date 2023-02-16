function getInputValueById(elementId){
    const getInputValue = document.getElementById(elementId);
    const inputValueString = getInputValue.value;
    const inputValue = parseInt(inputValueString);
    return inputValue;
}
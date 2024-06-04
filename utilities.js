function getInputFieldValueById(inputFieldID) {
    const inputFieldValueById = document.getElementById(inputFieldID);
    const inputFieldValueStr = inputFieldValueById.value;
    const inputFieldValue = parseFloat(inputFieldValueStr);
    inputFieldValueById.value = '';
    return inputFieldValue;
}

function getElementValueById(elementID) {
    const elementValueById = document.getElementById(elementID);
    const elementValueStr = elementValueById.innerText;
    const elementValue = parseFloat(elementValueStr);
    return elementValue;
}

function setTextElementValue(elementID, newValue) {
    const textElement = document.getElementById(elementID);
    textElement.innerText = newValue;
}
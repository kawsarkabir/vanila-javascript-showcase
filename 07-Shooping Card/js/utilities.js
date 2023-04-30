function getTextElementById(elementId){
    const getElements = document.getElementById(elementId);
    const getElementsString = getElements.innerText;
    const currentTotal = parseInt(getElementsString);
    return currentTotal;
}
function getSubTotal(){
    const currentPhoneTotal = getTextElementById('phone-total');
    const currentCaseTotal = getTextElementById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;
}
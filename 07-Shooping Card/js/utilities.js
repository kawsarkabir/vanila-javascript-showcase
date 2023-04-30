function getTextElementById(elementId){
    const getElements = document.getElementById(elementId);
    const getElementsString = getElements.innerText;
    const currentTotal = parseInt(getElementsString);
    return currentTotal;
}
function setTextElementValuById(element, value){
    const totalElement = document.getElementById(element)
    totalElement.innerText = value;
}
function getSubTotal(){
    const currentPhoneTotal = getTextElementById('phone-total');
    const currentCaseTotal = getTextElementById('case-total');
    
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValuById('sub-total', currentSubTotal);

    // calculate tax
    const texAmountString = (currentSubTotal * 0.1).toFixed(2);
    const texAmount = parseFloat(texAmountString);
    setTextElementValuById('tax-amount', texAmount);
    // calclulator final amount
    const finalAmount = currentSubTotal + texAmount;
    setTextElementValuById('final-total', finalAmount);
}
document.getElementById('check-out').addEventListener('click', function(){
    alert('Please Check Out !')
})
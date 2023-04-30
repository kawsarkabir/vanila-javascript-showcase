function updateCaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldString = caseNumberField.value;
    const previousCaseNumebr = parseInt(caseNumberFieldString);
    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previousCaseNumebr + 1;
    }else{
        newCaseNumber = previousCaseNumebr - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}
function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 60;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}
document.getElementById('btn-case-plus').addEventListener('click' , function(){
    const newCaseNumber = updateCaseNumber(true)
    updateCaseTotalPrice(newCaseNumber);
    getSubTotal();
})
document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);
    getSubTotal();
})
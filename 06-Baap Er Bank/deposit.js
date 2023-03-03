document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    
    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotal = depositTotalElement.innerText = depositAmount;
})
function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
    const phoneNumberFieldString = phoneNumberField.value;
    const previousPhoneNumberField = parseInt(phoneNumberFieldString);

    let newPhoneNumber;
    if(isIncrease === true){
        newPhoneNumber = previousPhoneNumberField + 1;
    }else{
        newPhoneNumber = previousPhoneNumberField - 1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}
function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1220;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}
document.getElementById('btn-phone-plus').addEventListener('click' , function(){
    const newPhoneNumber = updatePhoneNumber(true);  
    updatePhoneTotalPrice(newPhoneNumber);
    getSubTotal();
})
document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);
    getSubTotal();
})
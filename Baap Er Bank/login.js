document.getElementById('login-btn').addEventListener('click' , function(){
    const inputField = document.getElementById('input-field')
    const email = inputField.value;
    
    const passwordField = document.getElementById('password-field')
    const password = passwordField.value;

    if(email == 'k2@gmail.com' && password == 'kawsark2'){
        console.log('asol malik');
    }
    else{
        console.log('hack by unknow person');
    }
})

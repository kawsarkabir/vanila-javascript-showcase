function digitalClock(){

    // get hour, minutes, seconds
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var sesssion = document.getElementById('session');
   
    // time formate condition here 
    if(hrs >= 12){
        sesssion.innerHTML ='PM';
        hrs = hrs -12;
    }else{
        sesssion.innerHTML = 'AM';
    }
    // when hour, minutes, seonds less then 10 then before added just 0
    hrs = hrs <10 ? '0' + hrs : hrs;
    min = min <10 ? '0' + min : min;
    sec = sec <10 ? '0' + sec : sec;

    // cunnecet html class here
    document.getElementById('hour').innerHTML = hrs;
    document.getElementById('munite').innerHTML = min;
    document.getElementById('second').innerHTML = sec;
    setInterval(digitalClock, 1000);

}
// function call
setInterval(digitalClock);



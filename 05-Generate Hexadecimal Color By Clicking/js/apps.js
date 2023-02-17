window.onload = () =>{
    main();
}
function main(){

}

// random color generate function  here
function generateHexColor(){
    // #000000, #ffffff
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}
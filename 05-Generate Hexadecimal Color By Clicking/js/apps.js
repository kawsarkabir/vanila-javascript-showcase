window.onload = () =>{
    main();
}
function main(){
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const output = document.getElementById('output');
    const changeBtn = document.getElementById('change-btn');
    const copyBtn = document.getElementById('copy-btn');
    
    btn.addEventListener('click', function(){
        const bgColor = generateHexColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    })

    // clickboad here 
    copyBtn.addEventListener('click', function(){
        navigator.clipboard.writeText(output.value)
    })

}

// random color generate function  here
function generateHexColor(){
    // #000000, #ffffff
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

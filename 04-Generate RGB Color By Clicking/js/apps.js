/*===============================================
Change the background color by generating random rgb color by clicking a button
================================================*/

// Steps

// Step 1 - create onload handler
window.onload = () => {
    main();
}

function main(){
    
}
 

// step 2 - random color generator function
function generateRGBColor(){
    const red = Math.floor(math.random()* 255)
    const green = Math.floor(math.random()* 255)
    const blue = Math.floor(math.random()* 255)

    return  'rgb(${red}, ${green}, ${blue})'
}
generateRGBColor()

// step 3 - collect all necessary references

// step 4 - handle the click event
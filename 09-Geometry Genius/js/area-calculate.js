// getInputValue
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = ''
  return inputFieldValue;
}

// set textvalue
function setTextValue(textValueId, area){
    const element = document.getElementById(textValueId);
    element.innerText = area;
}

// create Dynamic HTML
function addToCalculationEntry(areaType, area){
    const container = document.getElementById('add-to-calculation-entry');
    const count =container.childElementCount
    const p = document.createElement('p');
    p.classList.add('my-2')
    p.innerHTML = `${count + 1}. ${areaType} ${area}cm <sup>2</sup>`;
    container.appendChild(p);
}


// triangle area
function calculateTriangleArea() {
  const base = getInputValue("triangle-base");
  const height = getInputValue("triangle-height");
  if(isNaN(base) || isNaN(height)){
    alert('Please insert a number');
    return;
  }
  const area = base * height * 0.5;
  setTextValue('triangle-area', area)

  // add to calculation entry
  addToCalculationEntry('Triangle Area:', area)
}

// Reactangle area
function calculateRectangleArea(){
    const base = getInputValue('rectangle-base');
    const length = getInputValue('rectangle-length');
    if(isNaN(base) || isNaN(length)){
        alert('Please insert a number');
        return;
      }
    const area = base * length;
    setTextValue('rectangle-area', area);

    // add to calculation entry
    addToCalculationEntry('Rectangle Area:', area)
}
// para
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base')
    const height = getInputValue('parallelogram-height')
    if(isNaN(base) || isNaN(height)){
        alert('Please insert a number');
        return;
      }
    const area = base * height
    setTextValue('parallelogram-area', area)

    // add to calculation entry
    addToCalculationEntry('Parallelogram Area:', area)
}
// rhombus
function calculateRhombusArea(){
    const diagonalOne = getInputValue('diagonal-one');
    const diagonalTwo = getInputValue('diagonal-two');
    if(isNaN(diagonalOne) || isNaN(diagonalTwo)){
        alert('Please insert a number');
        return;
      }
    const area = 0.5 * diagonalOne * diagonalTwo;
    setTextValue('rhombus-area', area)

    // add to calculation entry
    addToCalculationEntry('Rhombus Area:', area)
}
// pentagon 
function calculatePentagonArea(){
    const p = getInputValue('p')
    const b = getInputValue('b')
    if(isNaN(p) || isNaN(b)){
        alert('Please insert a number');
        return;
      }
    const area = 0.5 * p * b;
    setTextValue('pentagon-area', area)

    // add to calculation entry
    addToCalculationEntry('Pentagon Area:', area)
}
// Ellipse
function calculateEllipseArea(){
    const majorAxis = getInputValue('major-axis');
    const minorAxis = getInputValue('minor-axis');
    if(isNaN(majorAxis) || isNaN(minorAxis)){
        alert('Please insert a number');
        return;
      }
    const area = parseFloat((Math.PI * majorAxis * minorAxis).toFixed(2));
    setTextValue('ellipse-area', area)

    // add to calculation entry
    addToCalculationEntry('Ellipse Area:', area)
}
















/* // calculate Reactangle Area
function calculateReactangleArea() {
  const width = getInputValue("reactangle-width");
  const length = getInputValue("rectangle-length");
  const area = width * length;
  const areaTextValue = document.getElementById("area-text-value");
  areaTextValue.innerText = area;
}
function calculateParallelogramArea(){
    const base = document.getElementById('parallelogram-width')
    console.log(base);
    const height = document.getElementById('parallelogram-height');
    console.log(height);
    const area = base * height;
    console.log(area);
    setTextValue('parallelogram-area', area)
} */
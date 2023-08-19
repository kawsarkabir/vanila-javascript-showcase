// getInputValue
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  return inputFieldValue;
}

// set textvalue
function setTextValue(textValueId, area){
    const element = document.getElementById(textValueId);
    element.innerText = area;
}
// triangle area
function calculateTriangleArea() {
  const base = getInputValue("triangle-base");
  const height = getInputValue("triangle-height");
  const area = base * height * 0.5;
  setTextValue('triangle-area', area)
}
// Reactangle area
function calculateRectangleArea(){
    const base = getInputValue('rectangle-base');
    const length = getInputValue('rectangle-length');
    const area = base * length;
    setTextValue('rectangle-area', area);
}
// para
function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base')
    const height = getInputValue('parallelogram-height')
    const area = base * height
    setTextValue('parallelogram-area', area)
}
// rhombus
function calculateRhombusArea(){
    const diagonalOne = getInputValue('diagonal-one');
    const diagonalTwo = getInputValue('diagonal-two');
    const area = 0.5 * diagonalOne * diagonalTwo;
    setTextValue('rhombus-area', area)
}
// pentagon 
function calculatePentagonArea(){
    const p = getInputValue('p')
    const b = getInputValue('b')
    const area = 0.5 * p * b;
    setTextValue('pentagon-area', area)
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
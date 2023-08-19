function calculateTriangleArea(){
    const baseField = document.getElementById('triangle-base');
    const baseFieldValueString = baseField.value;
    const baseFieldValue = parseFloat(baseFieldValueString);

    const heightField = document.getElementById('triangle-height');
    const heightFieldValueString = heightField.value;
    const heightFieldValue = parseFloat(heightFieldValueString)

    const area = (baseFieldValue * heightFieldValue * 0.5 ); 
    const areaOfTriangle = document.getElementById('area-of-trianlge');
    areaOfTriangle.innerText = area
}
// calculate Reactangle Area
function calculateReactangleArea(){
    // get width field
    const widthField = document.getElementById('rectangle-width');
    const widthFieldValueString = widthField.value;
    const widthFieldValue = parseFloat(widthFieldValueString)

    // get length Field
    const lengthField = document.getElementById('rectangle-length');
    const lengthFieldValueString = lengthField.value;
    const lengthFieldValue = parseFloat(lengthFieldValueString);

    // area of reactangle
    const area = widthFieldValue * lengthFieldValue;
    const areaTextValue = document.getElementById('area-text-value');
    areaTextValue.innerText = area;
}
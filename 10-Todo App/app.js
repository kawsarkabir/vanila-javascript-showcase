document.getElementById('add-task-btn').addEventListener('click', ()=>{
    const taskInputField = document.getElementById('task-input-field');
    const taskInputValue =taskInputField.value;
    
    // create a element and set the innerText
    const containerDiv = document.getElementById('add-new-task-container')
    const p = document.createElement('p');
    p.classList.add('inner-task')
    containerDiv.classList.add('new-task');
    p.innerText = taskInputValue;
    taskInputField.value = ''
    containerDiv.appendChild(p)
})

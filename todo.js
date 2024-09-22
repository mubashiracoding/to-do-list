function addtask() {
    const newtask = document.createElement('li')
    const tasklist=document.getElementById('tasklist')
tasklist.appendChild(newtask)
newtask.textContent=document.getElementById('input-task').value
document.getElementById('input-task').value=''
deletetask(newtask)
}

function deletetask(newtask) {
    const deletebtn=document.createElement('button')
    deletebtn.textContent='delete'
    newtask.appendChild(deletebtn)
    deletebtn.onclick=function () {
        newtask.remove()
    }
    
}
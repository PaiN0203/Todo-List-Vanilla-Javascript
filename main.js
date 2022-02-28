window.addEventListener("load",() => {
    const form = document.querySelector("#taskForm")
    const newInput = document.querySelector("#newTask")
    const addTask = document.querySelector("#taskDiv")

    form.addEventListener("submit" , (e) =>{
        e.preventDefault();
        const task = newInput.value;

        if(!task) {
            alert ("Please fill the form");
            return
        }


        const taskList = document.createElement("div");
        taskList.classList.add("task")

        const taskListDiv = document.createElement("div")
        taskListDiv.classList.add("content");

        taskList.appendChild(taskListDiv)

        const taskinput = document.createElement("input")
        taskinput.classList.add("text")
        taskinput.type = "text";
        addTask.appendChild(taskList);
        taskinput.value = task;
        taskinput.setAttribute("readonly", "readonly")

        taskListDiv.appendChild(taskinput);

        const actionsdiv = document.createElement("div")
        actionsdiv.classList.add("actions");

        const taskeditbtn = document.createElement("button")
        taskeditbtn.classList.add("edit")
        taskeditbtn.innerHTML = "Edit"
        
        const taskdeletebtn = document.createElement("button")
        taskdeletebtn.classList.add("delete")
        taskdeletebtn.innerHTML = "Delete"

        actionsdiv.appendChild(taskeditbtn);
        actionsdiv.appendChild(taskdeletebtn);
        taskList.appendChild(actionsdiv)

        addTask.appendChild(taskList)

        addTask.value = "";

        taskeditbtn.addEventListener('click', ()=>{
            if(taskeditbtn.innerText.toLowerCase() == "edit"){
                taskinput.removeAttribute("readonly");
                taskinput.focus();
                taskeditbtn.innerText = "Save";
            } else {
                taskinput.setAttribute("readonly" , "readonly")
                taskeditbtn.innerText = "Edit";
            }
        });

        taskdeletebtn.addEventListener('click',()=>{
            addTask.removeChild(taskList);
        })

    })
})
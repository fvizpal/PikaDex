
function addTask(){
    let addTitle=document.querySelector(".a-title").value;
    let addStartDate=document.querySelector(".a-startDate").value;
    let addEndDate=document.querySelector(".a-endDate").value;
    let addDescription=document.querySelector(".a-description").value;
    let addNote=document.querySelector(".a-note").value;

    let titleError=document.querySelector(".aTitleError");
    let startdateError=document.querySelector(".aSDateError");
    let enddateError=document.querySelector(".aEDateError");

    if (!addTitle){ 
        titleError.textContent="*Add title to your task";
    }else{
        titleError.textContent="";
    }

    if (!addStartDate){
        startdateError.textContent="*Add start date to your task";
    }else{
        startdateError.textContent="";
    }

    if (!addEndDate){
        enddateError.textContent="*Add end date to your task";
    }else{
        enddateError.textContent="";
    }

    if (addTitle && addStartDate && addEndDate){
        
        let newTask=document.createElement("div");
        newTask.setAttribute("class","task");

        let newCheckInput=document.createElement("input");
        newCheckInput.setAttribute("class","label-text");
        newCheckInput.setAttribute("name","task");
        newCheckInput.setAttribute("type","checkbox");
        newCheckInput.setAttribute("id","item-1");

        let newLabelTitle=document.createElement("label");
        newLabelTitle.setAttribute("for","item-1");

        let newTaskTitle=document.createElement("span");
        newTaskTitle.setAttribute("class","label-text");

        let newTaskDesc=document.createElement("div");
        newTaskDesc.setAttribute("id","newTaskDescription");

        let newTaskStart=document.createElement("span");
        newTaskStart.setAttribute("class","tag start");
        newTaskStart.setAttribute("id","newTaskSDate");

        let newTaskEnd=document.createElement("span");
        newTaskEnd.setAttribute("class","tag end");
        newTaskEnd.setAttribute("id","newTaskEDate");
        
        let newTaskNote=document.createElement("div");
        newTaskNote.setAttribute("id","newTaskNote");

        let removeBtn=document.createElement("button");
        removeBtn.append("Remove Task");
        removeBtn.addEventListener("click",removetask);

        newTaskTitle.append(addTitle);
        newTaskStart.append(addStartDate);
        newTaskEnd.append(addEndDate);
        newTaskDesc.append(addDescription);
        newTaskNote.append(addNote);

        newLabelTitle.append(newTaskTitle);

        newTask.append(newCheckInput);
        newTask.append(newLabelTitle);
        newTask.append(newTaskDesc);
        newTask.append(newTaskStart);
        newTask.append(newTaskEnd);
        newTask.append(newTaskNote);
        newTask.append(removeBtn);

        let taskList=document.querySelector(".tasks-wrapper");
        taskList.append(newTask);

        const inputs = document.querySelectorAll("input");
        inputs.forEach(input => {
            input.value = '';
        }); 

        function removetask(){
            newTask.remove();
        }
    }
}
(function () {
    //HTML-objects
    var inputField;
    var addBtn;
    var toDo, done;
    
    var init = function () {
    
        var setElements = function () {
            inputField = document.getElementById("inputField");
            addBtn = document.getElementById("addBtn");
            
            toDo = document.getElementById("toDo");
            done = document.getElementById("done");
            
            inputField.focus();//Activate/focus in the inputField when entering the page
        }();
        /*----end setElements----*/
    
        var setEvents = function () {
            addBtn.onclick = addTasks;
        }();
        /*----end setEvents----*/
        
    }();
    /*----end init----*/

    function createTasks(list, taskTxt) {
        var newTaskBox = document.createElement("li"); //Create <li>
        
        list.appendChild(newTaskBox); // Set the box
        newTaskBox.innerText = taskTxt; // Set the text in the box 
        
        inputField.value = ""; //Remove text-input i field.. 
        inputField.focus(); //..and focus after added new task
        
        newTaskBox.onclick = addToDone; //Adds tasks to Done onclick
    }
    /*----end createTasks----*/

    function addTasks() {
        var taskTxt = inputField.value; //Set the text for the inputField

        if (taskTxt === "" || taskTxt === " ") { //If the inputField is empty, onclick..
            return false; //..don't add new task
        }
        createTasks(document.getElementById("toDo"), taskTxt); //..else, addNewTask.
    }
    /*----end addTasks----*/
    
    function addToDone() {
        var doneT = document.getElementById("titleDone");//Get the Done-title
        
        if (this.parentElement.id === "todo") {//When clicking on the todo task..
            toDo.appendChild(this);//..get this task
        } else {
            doneT.style.display = "block";// Show the Done-title.
            
            done.appendChild(this);//..add the task to done..
            this.style.backgroundColor = "rgb(72, 186, 72)";//..and set the box-color to green, when task is put to done.
            
            inputField.focus();//Focus after click.
        }
        /*----end addToDone----*/ 
    }
    /*----end addToDone----*/
    
}());
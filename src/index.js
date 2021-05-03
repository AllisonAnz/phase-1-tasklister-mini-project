document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  //To make the form function, we first grab the form element <for id="create-task-form"
  const newTaskForm = document.getElementById("create-task-form");
  
  //Get access to the list to be able to add a newTask to it 
  const taskList = document.getElementById("tasks")

  //add EventListener to get accesses to targets, and the newley entered task
  //update TaskList with newTask and update the DOM (show task on screen) to do this create a pTag, assign the value and append it
  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const newTaskInput = e.target.querySelector("#new-task-description").value
    const taskPTag = document.createElement('p')
    taskPTag.textContent = newTaskInput 
    taskList.appendChild(taskPTag)
    console.log(taskList)
    console.log(newTaskInput)
  })


  
});

//Type a task into the input field (x)

//click the submit button (x)

//See the task string appear in the DOM after the submit button is activated (x)
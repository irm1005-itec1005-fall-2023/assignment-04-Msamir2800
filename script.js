/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

// Constants
const appID = "app";
const headingText = "To do. To done. ✅";

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//
inititialise();

document.addEventListener("DOMContentLoaded", function() {
  const todoText = document.getElementById("todo-text");
  const addButton = document.getElementById("add-button");
  const todoList = document.getElementById("todo-list");

  addButton.addEventListener("click", addTodo);
  todoText.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
          addTodo();
      }
  });

  todoList.addEventListener("click", function(event) {
      if (event.target.classList.contains("delete-button")) {
          deleteTodo(event.target.parentElement);
      } else if (event.target.classList.contains("select-button")) {
          toggleCompleted(event.target.parentElement);
      }
  });

  function addTodo() {
      const text = todoText.value.trim();
      if (text === "") return;

      const todoItem = document.createElement("li");
      todoItem.classList.add("todo");
      todoItem.innerHTML = `
          <span>${text}</span>
          <button class="select-button">Select</button>
          <button class="delete-button">Delete</button>
      `;

      todoList.appendChild(todoItem);
      todoText.value = "";
  }

  function deleteTodo(todoItem) {
      todoItem.remove();
  }

  function toggleCompleted(todoItem) {
      todoItem.classList.toggle("completed");
  }
});

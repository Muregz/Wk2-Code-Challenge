## Week 2 Code Challenge: Interactive Shopping List
Develop a webpage with a shopping list. Users can add items to the list, mark items as purchased, and clear the list.
Array: Maintain a JavaScript array to store shopping list items.

DOM Manipulation:
Create an HTML structure with an input field for adding items, a list container to display items, and buttons for "Add", "Mark Purchased", and "Clear List".
Use JavaScript to dynamically add new items to the list container when the user clicks the "Add" button. (The new items do not have to be persisted once the page refreshes)
Update the list item visually to indicate purchased items (e.g., strikethrough text, different background color).

Event Handling:
Attach event listeners to the "Add" button to capture user input and add items to the list.
Attach event listeners to the list of items to allow users to mark them as purchased.
Attach an event listener to the "Clear List" button to remove all items from the list.

1. First of all  declare the constant "inputbox".
  
  const inputbox=document.getElementById("input-box");

2. Declare the listcontainer constant
 
 const listcontainer = document.getElementById("list-container");

 3. Declare the function addItem() for the button "Add"

 function addItem(){

 }

 4. The if  else function returns the alert "You must input an item!" if the input box is blank/empty.

   if(inputbox.value === ''){
        alert("You must input an item!");
    }

5. Else the function adds whatever item is typed in the "li" variable.

    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
    }

6. the li variable is displayed in the list container   

     listcontainer.appendChild(li);

7. The input box is blank after the else function is executed.

      inputbox.value = "";

8. Add a cross-icon that can be used to delete an item in the list,and display it.
     let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

9. 

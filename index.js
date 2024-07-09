// Function to add item to the list
function addItem() {
    var itemInput = document.getElementById("itemInput");
    var itemText = itemInput.value.trim();

    if (itemText !== "") {
        var itemList = document.getElementById("itemList");

        // Create new list item element
        var listItem = document.createElement("li");
        listItem.className = "item";
        listItem.innerHTML = `
            <span>${itemText}</span>
            <button onclick="removeItem(this)">Remove</button>
        `;

        // Append new item to the list container
        itemList.appendChild(listItem);

        // Clear the input field
        itemInput.value = "";
    }
}

// Function to remove item from the list
function removeItem(button) {
    var listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
}

// Function to mark item as purchased
function markPurchased(button) {
    var listItem = button.parentNode;
    var span = listItem.querySelector("span");

    // Toggle a CSS class to visually mark as purchased
    listItem.classList.toggle("purchased");

    // Alternatively, uncomment this line to toggle strikethrough style
    // span.style.textDecoration = span.style.textDecoration === "line-through" ? "none" : "line-through";
}

// Function to clear the entire list
function clearList() {
    var itemList = document.getElementById("itemList");
    itemList.innerHTML = "";
}

// Event listener for adding item
document.getElementById("addItemBtn").addEventListener("click", addItem);

// Event delegation for marking items as purchased
document.getElementById("itemList").addEventListener("click", function(event) {
    if (event.target && event.target.matches("button")) {
        markPurchased(event.target);
    }
});

// Event listener for clearing the entire list
document.getElementById("clearListBtn").addEventListener("click", clearList);

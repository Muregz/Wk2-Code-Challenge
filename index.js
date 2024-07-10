
function addItem() {
    var itemInput = document.getElementById("itemInput");
    var itemText = itemInput.value.trim();

    if (itemText !== "") {
        var itemList = document.getElementById("itemList");


        var listItem = document.createElement("li");
        listItem.className = "item";
        listItem.innerHTML = `
            <span>${itemText}</span>
            <button onclick="removeItem(this)">Remove</button>
  
            `;
 
            itemList.appendChild(listItem);

 
           itemInput.value = "";
    }
}


function removeItem(button) {
    var listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
}


function markPurchased(button) {
    var listItem = button.parentNode;
    var span = listItem.querySelector("span");
 
 
    listItem.classList.toggle("purchased");


 
    function clearList() {
    var itemList = document.getElementById("itemList");
    itemList.innerHTML = "";
}


document.getElementById("addItemBtn").addEventListener("click", addItem);


document.getElementById("itemList").addEventListener("click", function(event) {
    if (event.target && event.target.matches("button")) {
        markPurchased(event.target);
    }
});


document.getElementById("clearListBtn").addEventListener("click", clearList);


}

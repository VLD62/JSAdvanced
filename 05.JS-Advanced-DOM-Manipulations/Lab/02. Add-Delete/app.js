function addItem() {
    const inputText = document.getElementById('newText');
    const items = document.getElementById('items');
    const newLiElement = document.createElement('li');
    const aElement = document.createElement("a");
    aElement.href = "#";
    aElement.innerText = '[Delete]';
    aElement.addEventListener("click", deleteItem)
    newLiElement.textContent = inputText.value;
    newLiElement.appendChild(aElement);
    items.appendChild(newLiElement);    
    inputText.value = "";
    function deleteItem(){
        newLiElement.remove();
    }
}
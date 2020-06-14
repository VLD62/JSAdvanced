function addItem() {
    const inputText = document.getElementById('newItemText');
    const items = document.getElementById('items');
    const newLiElement = document.createElement('li');
    newLiElement.textContent = inputText.value;
    items.appendChild(newLiElement);
    inputText.value = "";
}
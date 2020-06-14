function addItem() {
    console.log('TODO:...');
    const newItemText = document.getElementById("newItemText");
    const newItemValue = document.getElementById("newItemValue");
    const menuElement = document.getElementById("menu");
    const newOptionElement = document.createElement("option");

    newOptionElement.textContent = newItemText.value;
    newOptionElement.value = newItemValue.value;

    menuElement.appendChild(newOptionElement);

    newItemText.value = "";
    newItemValue.value = "";
}
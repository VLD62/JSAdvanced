function focus() {
    const selections = document.getElementsByTagName('input');
    for (let element of selections) {
        element.addEventListener('focus',focusedElement);
        element.addEventListener('blur', unfocusedElement);
    }
    function focusedElement(event) {
        event.target.parentNode.className = 'focused';
    }
    function unfocusedElement(event) {
        event.target.parentNode.className = '';
    }
}
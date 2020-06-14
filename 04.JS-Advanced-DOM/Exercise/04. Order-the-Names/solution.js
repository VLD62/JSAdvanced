function solve() {
    const addButton = document.getElementsByTagName('button')[0];
    const input = document.querySelector("input[type=text]");
    let fLetter = '';

    addButton.addEventListener('click', function () {
        let InputString = input.value;
        fLetter = InputString[0].toUpperCase();
        let index = fLetter.charCodeAt(0) - 65;
        let Allol = document.querySelectorAll("ol li");
        if (Allol[index].textContent === '') {
            Allol[index].textContent += InputString.charAt(0).toUpperCase() + InputString.slice(1).toLowerCase() ;
        } else {
            Allol[index].textContent += ", " + InputString.charAt(0).toUpperCase() + InputString.slice(1).toLowerCase();
        }
        input.value = '';
    });
}
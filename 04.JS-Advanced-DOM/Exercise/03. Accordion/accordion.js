function toggle() {
    const button = document.getElementsByClassName("button")[0];
    const divExtra = document.getElementById("extra");

    if (divExtra.style.display === "none") {
        divExtra.style.display = "block";
        button.innerText = "Less";
    } else {
        divExtra.style.display = "none";
        button.innerText = "More";
    }
}
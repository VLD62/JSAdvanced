function validate() {
    function validateEmail(email) {
        const re = /^[a-z]+@[a-z]+\.+[a-z]+$/;
        return re.test(String(email));
    }
    const inputEmail = document.getElementById("email");
    inputEmail.addEventListener('change', updateValue);
    function updateValue(e) {
        if (!validateEmail(inputEmail.value)){
            inputEmail.classList.add("error");
        } else { 
            inputEmail.classList.remove("error");
        }
    }
}
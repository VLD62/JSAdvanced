function deleteByEmail() {
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    const inputEmail = document.getElementsByTagName("input")[0].value;
    const emails = document.getElementsByTagName("td");
    const tableRows = document.getElementsByTagName("tr");
    const result = document.getElementById("result");
    let emailsFiltered = []
    for (let index = 0; index < emails.length; index++) {
        if (validateEmail(emails[index].textContent)) {
            emailsFiltered.push(emails[index].textContent)
        }
    }
    if (emailsFiltered.includes(inputEmail.trim())) {
        for (let index = 0; index < tableRows.length; index++) {
            if (tableRows[index].textContent.includes(inputEmail))
                tableRows[index].remove();
        }
        result.textContent = "Deleted."
    } else {
        result.textContent = "Not found."
    }
}
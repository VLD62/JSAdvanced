function lockedProfile() {

    const user1LockedButton = document.querySelectorAll("input[name=user1Locked]");
    const user2LockedButton = document.querySelectorAll("input[name=user2Locked]");
    const user3LockedButton = document.querySelectorAll("input[name=user3Locked]");

    const showButtonUser1 = document.getElementsByTagName("button")[0]
    const showButtonUser2 = document.getElementsByTagName("button")[1]
    const showButtonUser3 = document.getElementsByTagName("button")[2]

    showButtonUser1.addEventListener("click", function () {
        const user1MoreInfo = document.getElementById("user1HiddenFields");
        if (user1LockedButton[1].checked) {
            if (showButtonUser1.innerText == "Show more") {
                user1MoreInfo.style.display = "block";
                showButtonUser1.innerText = "Hide it"
            } else {
                user1MoreInfo.style.display = "none";
                showButtonUser1.innerText = "Show more"
            }
        }
    });

    showButtonUser2.addEventListener("click", function () {
        const user2MoreInfo = document.getElementById("user2HiddenFields");
        if (user2LockedButton[1].checked) {
            if (showButtonUser2.innerText == "Show more") {
                user2MoreInfo.style.display = "block";
                showButtonUser2.innerText = "Hide it"
            } else {
                user2MoreInfo.style.display = "none";
                showButtonUser2.innerText = "Show more"
            }
        }
    });

    showButtonUser3.addEventListener("click", function () {
        const user3MoreInfo = document.getElementById("user3HiddenFields");
        if (user3LockedButton[1].checked) {
            if (showButtonUser3.innerText == "Show more") {
                user3MoreInfo.style.display = "block";
                showButtonUser3.innerText = "Hide it"
            } else {
                user3MoreInfo.style.display = "none";
                showButtonUser3.innerText = "Show more"
            }
        }
    });
}
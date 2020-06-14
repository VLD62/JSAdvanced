function notify(message) {
    const notifyDivElement = document.getElementById("notification");
    notifyDivElement.textContent = message;
    notifyDivElement.style.display = "block"; 
    setTimeout(function(){
        notifyDivElement.style.display = "none"; 
       }, 2000);
}
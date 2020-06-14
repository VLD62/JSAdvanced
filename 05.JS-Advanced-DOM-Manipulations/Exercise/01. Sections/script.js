function create(words) {
   const contentDiv = document.getElementById("content");
   for (word of words){
      const newDivElement = document.createElement("div");
      const newParagraphElement = document.createElement("p");
      newParagraphElement.textContent = word;
      newParagraphElement.style.display = "none";
      contentDiv.appendChild(newDivElement);
      newDivElement.appendChild(newParagraphElement);
      newDivElement.addEventListener("click", function(){
         newParagraphElement.style.display = "block";
       });
   }
}
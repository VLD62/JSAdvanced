function createArticle(){
    const articleTitleInput = document.getElementById("createArticle");
    const articleContentInput = document.getElementById("createContent");
    const articleList = document.getElementById("articles");

    const title = articleTitleInput.value;
    const content = articleContentInput.value;

    if (title !== "" && content !== ""){
        const newArticle = document.createElement('article');
        const newHeading = document.createElement('h3');
        const newParagraph = document.createElement('p');

        newArticle.appendChild(newHeading);
        newArticle.appendChild(newParagraph);

        newHeading.innerText =  title;
        newParagraph.innerText = content;

        articleList.appendChild(newArticle);
        
        articleTitleInput.value = "";
        articleContentInput.value = "";

    }
}
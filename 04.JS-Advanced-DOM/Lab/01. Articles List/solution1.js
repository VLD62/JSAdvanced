function createArticle() {
	const createTitleInput = document.getElementById('createTitle');
	const createContentTextArea = document.getElementById('createContent');
	const articleSection = document.getElementById('articles');
	
	const titleInputValue = createTitleInput.value;
	const contentValue = createContentTextArea.value;

	if (!titleInputValue || !contentValue){
		return;
	}
	const newArticle = document.createElement('article');
	const articleHeading = document.createElement('h3');
	const articleParagraph = document.createElement('p');

	newArticle.appendChild(articleHeading);
	newArticle.appendChild(articleParagraph);

	articleHeading.innerText = titleInputValue;
	articleParagraph.innerText = contentValue;

	articleSection.appendChild(newArticle);
	createTitleInput.value = '';
	createContentTextArea.value = '';
}
function solve() {
  const inputParagraph = document.querySelector('#input');
  const outputDiv = document.querySelector('#output');
  const paragraphContent = inputParagraph.innerText;

  const sentenceArray = Array.from(paragraphContent.split(". "));
  let counter = 0;
  let currentParagraph = document.createElement('p');
  for (let i = 0; i < sentenceArray.length; i++) {
    counter++;
    currentParagraph.innerText += sentenceArray[i];
    if (counter === 3) {
      outputDiv.appendChild(currentParagraph);
      currentParagraph = document.createElement('p');
      counter = 0;
    }
  }
  if (counter !== 0) {
    outputDiv.appendChild(currentParagraph);
  }
}
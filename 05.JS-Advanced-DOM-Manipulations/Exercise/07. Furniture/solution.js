function solve() {
  const tBody = document.getElementsByTagName('tbody')[0];
  const textInput = document.getElementsByTagName('textarea')[0];
  const generateBtn = document.getElementsByTagName('button')[0];
  const buyBtn = document.getElementsByTagName('button')[1];
  const resultOutput = document.getElementsByTagName('textarea')[1];

  generateBtn.addEventListener('click', function () {
    let furnitureArray = JSON.parse(textInput.value);
    for (furniture of furnitureArray) {
      //Create tr
      const newTr = document.createElement('tr');
      //Create image td
      const newImageTd = document.createElement('td');
      const newImageImg = document.createElement('img');
      newImageImg.src = furniture['img'];
      newImageTd.appendChild(newImageImg);
      newTr.appendChild(newImageTd);
      //Create name td
      const newNameTd = document.createElement('td');
      const newNameP = document.createElement('p');
      newNameP.innerHTML = furniture['name'];
      newNameTd.appendChild(newNameP);
      newTr.appendChild(newNameTd);
      //Create price td
      const newPriceTd = document.createElement('td');
      const newPriceP = document.createElement('p');
      newPriceP.innerHTML = furniture['price'];
      newPriceTd.appendChild(newPriceP);
      newTr.appendChild(newPriceTd);
      //Create decoration td
      const newDecorationTd = document.createElement('td');
      const newDecorationP = document.createElement('p');
      newDecorationP.innerHTML = furniture['decFactor'];
      newDecorationTd.appendChild(newDecorationP);
      newTr.appendChild(newDecorationTd);
      //Create checkbox td
      const newCheckboxTd = document.createElement('td');
      const newCheckbox = document.createElement('input');
      newCheckbox.type = 'checkbox';
      newCheckboxTd.appendChild(newCheckbox);
      newTr.appendChild(newCheckboxTd);
      //Append tr to the table
      tBody.appendChild(newTr);
    }
  });

  buyBtn.addEventListener('click', function () {
    const trs = document.querySelectorAll('tbody tr');
    let totalFurniture = {
      furniture: '',
      totalPrice: 0,
      totalDecFactor: 0,
    };
    let counter = 0;
    for (i = 0; i < trs.length; ++i) {
      if (
        trs[i]
          .getElementsByTagName('td')[4]
          .getElementsByTagName('input')[0].checked
      ) {
        totalFurniture['furniture'] += `${
          trs[i]
            .getElementsByTagName('td')[1]
            .getElementsByTagName('p')[0].innerHTML
          }, `;
        totalFurniture['totalPrice'] += Number(
          trs[i]
            .getElementsByTagName('td')[2]
            .getElementsByTagName('p')[0].innerHTML
        );
        totalFurniture['totalDecFactor'] += Number(
          trs[i]
            .getElementsByTagName('td')[3]
            .getElementsByTagName('p')[0].innerHTML
        );
        counter++;
      }
    }
    if (totalFurniture['furniture'] !== '') {
      resultOutput.value = `Bought furniture: ${totalFurniture[
        'furniture'
      ].substring(
        0,
        totalFurniture['furniture'].length - 2
      )}\nTotal price: ${totalFurniture['totalPrice'].toFixed(
        2
      )}\nAverage decoration factor: ${totalFurniture['totalDecFactor'] / counter}`;
    }
  });
}
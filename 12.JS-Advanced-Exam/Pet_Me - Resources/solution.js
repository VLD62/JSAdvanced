function solve() {
    const nameInput = document.getElementsByTagName('input')[0];
    const ageInput = document.getElementsByTagName('input')[1];
    const kindInput = document.getElementsByTagName('input')[2];
    const ownerInput = document.getElementsByTagName('input')[3];
    const btn = document.getElementsByTagName('button')[0];
    const adoptionElement = document.querySelectorAll('#adoption ul')[0];
    const adoptedElement = document.querySelectorAll('#adopted ul')[0];

    btn.addEventListener('click', function (e) {
        if (!isNaN(ageInput.value) && nameInput.value != "" && kindInput.value != ""
        &&  ownerInput.value != "") {
            const newLi = document.createElement('li');
            const newP = document.createElement('p');
            newP.innerHTML = `<strong>${nameInput.value}</strong> is a <strong>${ageInput.value}</strong> year old <strong>${kindInput.value}</strong>`;
            newLi.appendChild(newP);
            adoptionElement.appendChild(newLi);
            const newSpan = document.createElement('span');
            newSpan.textContent = `Owner: ${ownerInput.value}`;
            newLi.appendChild(newSpan);
            const newBtn = document.createElement('button');
            newBtn.textContent = 'Contact with owner'
            newLi.appendChild(newBtn);          
            newBtn.addEventListener('click', function(){
                const newDiv = document.createElement('div');
                const newInput = document.createElement('input');
                newInput.placeholder = "Enter your names";
                newBtn.textContent = "Yes! I take it!"; 
                newDiv.appendChild(newInput);
                newDiv.appendChild(newBtn);
                newLi.appendChild(newDiv);
                newBtn.addEventListener('click', function(){
                    if (newInput.value != "") {
                        newSpan.textContent =  `New Owner: ${newInput.value}`;
                        newDiv.removeChild(newInput);
                        newBtn.textContent = "Checked"; 
                        adoptedElement.appendChild(newLi);                        
                        newBtn.addEventListener('click', function(){
                           adoptedElement.removeChild(newLi);                          
                        }) 
                    }  
                })       

            })
            nameInput.value = "";
            ageInput.value = "";
            kindInput.value = "";
            ownerInput.value = "";
        }

        e.preventDefault();   
    }, false);

}



// //Adopt pet;
// document.body.innerHTML = `<h1>Pet Me!</h1>
//     <p>Want to adopt a pet or need to rehome a dog or cat?</p>
//     <p>Here we can help!</p>
//     <form id="add">
//         <h2>Add New Pet</h2>
//         <div id='container'>
//             <input type="text" placeholder="Name" />
//             <input type="text" placeholder="Age" />
//             <input type="text" placeholder="Kind" />
//             <input type="text" placeholder="Current Owner" />
//             <button>Add</button>
//         </div>
//     </form>
//     <section id="adoption">
//         <h2>Find a new friend from here:</h2>
//         <ul></ul>
//     </section>
//     <section id="adopted">
//         <h2>Buddies with a new home:</h2>
//         <ul></ul> 
//     </section>
//     <script>document.onload = solve();</script>`

// result();
//     // fill inputs
//     const form = document.getElementById('container');
//         let [name, age, kind, owner, addBtn] = Array.from(form.children);

//         name.value = 'Tom';
//         age.value = '0.3';
//         kind.value = 'cat';
//         owner.value = 'Jim King';

//     // click add
//     addBtn.click();

//     // fill contact btn
//     let newLiItem = Array.from(document.querySelector("#adoption > ul").children)[0];
//     let [p, span, btn] = Array.from(newLiItem.children); // [p, span, btn]               
//     btn.click();

//     // fill new input 
//     document.querySelector("#adoption > ul > li > div > input").value = 'Lara Smith'; 
//     document.querySelector("#adoption > ul > li > div > button").click(); 
    
//     let countLi = document.querySelector("#adopted > ul").children.length;
      
//     expect(countLi).to.be.equal(1,'One pet is adopted'); 
//     expect(document.querySelector("#adopted > ul > li > p").textContent).to.be.equal("Tom is a 0.3 year old cat",'One pet is adopted - Tom is a 0.3 year old cat'); 
//     expect(document.querySelector("#adopted > ul > li > span").textContent).to.be.equal("New Owner: Lara Smith",'One pet is adopted from Lara Smith'); 
//     expect(document.querySelector("#adopted > ul > li > button").textContent).to.be.equal("Checked",'Button text is Checked'); 
     
     
 
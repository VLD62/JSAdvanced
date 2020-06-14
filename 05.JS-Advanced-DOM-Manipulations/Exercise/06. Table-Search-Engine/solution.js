function solve() {
   const inputText = document.getElementById('searchField');
   const searchBtn = document.getElementById('searchBtn');
   const trs = document.querySelectorAll('tbody tr');
   searchBtn.addEventListener('click', function () {
      let searchString = inputText.value;
      inputText.value = "";
      for (i = 0; i < trs.length; ++i) {
         trs[i].classList.remove("select");
         if (trs[i].innerHTML.includes(searchString)) {
            trs[i].classList.add("select");
         }
      }
   });
}
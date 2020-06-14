function solve() {
   const trs = document.querySelectorAll('tbody tr');
   for (let j = 0; j < trs.length; j++) {
      trs[j].addEventListener('click', function () {
         if (trs[j].style.backgroundColor !== ''){
            trs[j].style.backgroundColor = '';
         } else {
            for (let i = 0; i < trs.length; i++) {
               trs[i].style.backgroundColor = '';
            }
            trs[j].style.backgroundColor = "#413f5e";
         }

      });
   }
}


// const allBtns = document.querySelectorAll(".clr-cols");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

 function addGlobalEventListener(type, selector, callback) {
   document.addEventListener(type, e => {
      if (e.target.matches(selector)) callback(e);
   })
}

 function randNumbGen(){
   return Math.floor(Math.random() * hex.length)
}


export  {addGlobalEventListener, randNumbGen, hex}
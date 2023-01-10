import './style.css';
import {addGlobalEventListener, randNumbGen, hex } from './bgColour';


const app = document.querySelector('#app');
let count = 0;


addGlobalEventListener('click', 'button', e=>{
  let hexClr = '#';
  let btns = e.target;
  const primeBtn = btns.firstChild;
  count += 1;
  for (let i = 0; i < 6; i++) {
    hexClr += hex[randNumbGen()]
   }
  if(primeBtn.nodeValue == 1) {
     value.textContent = hexClr;
     one.textContent = count;
     one.style.backgroundColor = hexClr;
     one.style.color = '#ddd';
  } else if (primeBtn.nodeValue == 2 ) {
    value.textContent = hexClr;
    two.style.backgroundColor = hexClr;
    two.style.color = '#ddd';
    two.textContent = count;
  
  }else if (primeBtn.nodeValue == 3 ) {
    value.textContent = hexClr;
    three.style.backgroundColor = hexClr;
    three.style.color = '#ddd';
    three.textContent = count;
  
  }else if (primeBtn.nodeValue == 4 ) {
    value.textContent = hexClr;
    four.style.backgroundColor = hexClr;
    four.style.color = '#ddd';
    four.textContent = count;
  
  }else if (primeBtn.nodeValue == 5 ) {
    value.textContent = hexClr;
    five.style.backgroundColor = hexClr;
    five.style.color = '#ddd';
    five.textContent = count;
  
  }else if (primeBtn.nodeValue == 6 ) {
    value.textContent = hexClr;
    six.style.backgroundColor = hexClr;
    six.style.color = '#ddd';
    six.textContent = count;
  }else if (primeBtn.nodeValue == 7 ) {
    value.textContent = hexClr;
    seven.style.backgroundColor = hexClr;
    seven.style.color = '#ddd';
    seven.textContent = count;
  
  }else if (primeBtn.nodeValue == 8 ) {
    value.textContent = hexClr;
    eight.style.backgroundColor = hexClr;
    eight.style.color = '#ddd';
    eight.textContent = count;
  
  }else if (primeBtn.nodeValue == 9 ) {
    value.textContent = hexClr;
    nine.style.backgroundColor = hexClr;
    nine.style.color = '#ddd';
    nine.textContent = count;
  
  }else if (primeBtn.nodeValue == 10 ) {
    value.textContent = hexClr;
    ten.style.backgroundColor = hexClr;
    ten.style.color = '#ddd';
    ten.textContent = count;
  
  }
})


app.innerHTML = `
  <div class="container">
    
    <div class="counter-div">
      <h4 id="counter">Each button holds a bg-colour </h4>
    </div>
    
    <div class="row">
      <div class="clr-cols clr1">1</div>
      <div class="clr-cols clr2">2</div>
      <div class="clr-cols clr3">3</div>
      <div class="clr-cols clr4">4</div>
      <div class="clr-cols clr5">5</div>
      <div class="clr-cols clr6">6</div>
      <div class="clr-cols clr7">7</div>
      <div class="clr-cols clr8">8</div>
      <div class="clr-cols clr9">9</div>
      <div class="clr-cols clr10">10</div>
    </div>

    <div class="btn-counter">
      <button class="btn btn1">1</button>
      <button class="btn bnt2">2</button>
      <button class="btn btn3">3</button>
      <button class="btn btn4">4</button>
      <button class="btn btn5">5</button>
      <button class="btn btn6">6</button>
      <button class="btn btn7">7</button>
      <button class="btn btn8">8</button>
      <button class="btn btn9">9</button>
      <button class="btn btn10">10</button>
    </div>
  </div>
`;

// variables for each column and value
const value = document.getElementById("counter");
const one = document.querySelector(".clr1")
const two = document.querySelector(".clr2")
const three = document.querySelector(".clr3")
const four = document.querySelector(".clr4")
const five = document.querySelector(".clr5")
const six = document.querySelector(".clr6")
const seven = document.querySelector(".clr7")
const eight = document.querySelector(".clr8")
const nine = document.querySelector(".clr9")
const ten = document.querySelector(".clr10")
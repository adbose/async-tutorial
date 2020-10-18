var timeout2 = setTimeout(bye2, 3000);  // same as window.setTimeout(bye, 3000)
console.log('hello');
var timeout1 = setTimeout(bye1, 1000);
console.log("mid");
// clearTimeout(timeout2);
clearTimeout(timeout1);  // clearTimeout clears the setTimeout function that
// stops the execution of the function within setTimeout too

function bye1() {
    console.log('goodbye1');
    console.log('fin1');
  }

function bye2() {
  console.log('goodbye2');
  console.log('fin2');
}
console.log('fin');
// this is why this script doesnt execute the bye1 function

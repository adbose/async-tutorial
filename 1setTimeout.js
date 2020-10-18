// setTimeout and setInterval are part of the window object
// window is implied, so not written when using these functions

//setTimeout allows a code to be executed after the set timeout has completed
setTimeout(bye2, 3000);  // same as window.setTimeout(bye, 3000)
console.log('hello');
setTimeout(bye1, 1000);
console.log("mid");

function bye1() {
  console.log('goodbye1');
  console.log('fin1');
  }

function bye2() {
  console.log('goodbye2');
  console.log('fin2');
}
console.log('fin');
// the output in the console is hello, followed by goodbye after 3 seconds
// this is because using setTimeout takes the execution flow of the function inside in an async path
// and goes on to executes the next command

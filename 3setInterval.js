// setInterval allows a code to be executed repeatedly after the set interval has passed.
var count = 0;
var countInterval = setInterval(counter, 1000);
// using the setInterval function, takes the function inside in an async path
// and moves on to execute the next instructions
// this is why it logs hello and start to the console
// and then moves on to log the counter number after the set interval

var btn = document.getElementById("btn");

console.log("hello");
console.log("start");

function counter() {
    console.log(++count);
}

btn.addEventListener("click", () => {
    clearInterval(countInterval);
    console.log("fin");
});
// clicking on the button clears the set interval, and
// the function executed by the setInterval function stops too

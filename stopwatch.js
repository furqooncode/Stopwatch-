const number = document.getElementById("number");
const hours = document.getElementById("hours");
const mins = document.getElementById("minutes");
const secs = document.getElementById("seconds");
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const pause = document.getElementById("pause");
let blur = document.getElementById("blur");

let clickActive = 0;

let counts = 00;
let seccounts = 00;
let mincounts = 00;
let hrcounts = 00;
let counting = false;
let pausable = {
    num : null,
    sec : null,
    min : null,
    hrs : null,
}

function run() {
     counting = !counting;
counting = true;
pausable.num = setInterval(function () {
   counts++;
   number.innerHTML = counts.toString().padStart('7', 0);  
 },1);
pausable.sec = setInterval(function () {
   seccounts = (seccounts + 1) % 60;
   seconds.innerHTML = seccounts.toString().padStart('2', 0);    
 },1000);
pausable.min = setInterval(function () {
   mincounts = (mincounts + 1) % 60;
   mins.innerHTML = mincounts.toString().padStart('2', 0);    
 },60000);
pausable.hrs = setInterval(function () {
   hrcounts++;
   hours.innerHTML = hrcounts.toString().padStart('2', 0);    
 },3600000);
}

start.addEventListener("click", function () {
   run();  
 start.style.display = "none";
 blur.style.display = "block "
  start.innerHTML = "START";
})

pause.addEventListener('click', function () {
    clearInterval(pausable.num);
    clearInterval(pausable.sec);
    clearInterval(pausable.min);
    clearInterval(pausable.hrs);
  start.innerHTML = "CONTINUE";
  start.style.display = "block";
  blur.style.display = "none";
})

reset.addEventListener('click',function () {
    clearInterval(pausable.num);
    clearInterval(pausable.sec);
    clearInterval(pausable.min);
    clearInterval(pausable.hrs);
   counts = 0;
   seccounts = 0;
   mincounts = 0;
   hrscounts = 0;
    number.innerHTML = counts.toString().padStart('7', 0); 
    seconds.innerHTML = seccounts.toString().padStart('2', 0);
     mins.innerHTML = mincounts.toString().padStart('2', 0); 
     hours.innerHTML = hrcounts.toString().padStart('2', 0);   
     start.innerHTML = "START";
      start.style.display = "block"; 
      blur.style.display = "none";
})


let minutes = 0, seconds= 0, hours= 0, milliSeconds = 0;
let elapsedTime = 0;
let startTime = 0;
let startedTimer = false;
let timerId = null;
function getElement(value){
 return document.getElementById(value);
}
getElement("start").addEventListener("click",startTimer);
getElement("stop").addEventListener("click",stopTimer);
getElement("reset").addEventListener("click",resetTimer);

function startTimer(){
  
  if(!startedTimer){
    startTime = Date.now() - elapsedTime;
    getElement("start").innerHTML = "Pause";
    startedTimer = true;
    timerId = setInterval(() => {
     let currentTime = Date.now();
     elapsedTime = currentTime - startTime;
     milliSeconds = Math.floor((elapsedTime%1000/10));
     seconds = Math.floor((elapsedTime/1000)%60);
     minutes = Math.floor((elapsedTime/(1000*60))%60);
     hours = Math.floor(elapsedTime/(1000*60*60));
     console.log(elapsedTime);
     updateDisplay();
   },1);
  }
  else{
   getElement("start").innerHTML = "Resume";
   startedTimer = false;
   clearInterval(timerId);
  }
}
function stopTimer(){
 getElement("start").disabled = true;
 getElement("stop").disabled = true;
 clearInterval(timerId);
}
function resetTimer(){
 elapsedTime = 0;
 milliSeconds = 0;
seconds = 0;
minutes = 0;
hours = 0;
getElement("start").disabled = false;
getElement("stop").disabled = false;
getElement("start").innerHTML = "Start";
clearInterval(timerId);
startedTimer = false;
updateDisplay();
}
function updateDisplay(){
 getElement("display").innerHTML = String(hours).padStart(2,"0") + ":" + String(minutes).padStart(2,"0") + ":" + String(seconds).padStart(2,"0") + ":" + String(milliSeconds).padStart(2,"0");
}
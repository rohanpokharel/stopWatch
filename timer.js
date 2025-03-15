let timerStarted= false;
      let timerId = null;
      let milliSeconds = 0, seconds=0, minutes = 0, hours = 0;
      function getElement(value){
      return document.getElementById(value);
      }
      getElement("makeTimer").addEventListener("click",makeTimer);
      getElement("start").addEventListener("click",startTimer);
      getElement("stop").addEventListener("click",stopTimer);
      getElement("reset").addEventListener("click", resetTimer);
      function startTimer(){
      if(!timerStarted && (hours>0 || minutes>0 || seconds>0 || milliSeconds>0)){
      timerStarted = true;
      getElement("start").innerHTML = "Pause";
      setTimeout(() =>{
        timerId = setInterval(()=>{
     if(milliSeconds > 0){
      milliSeconds--;
     }
    else if(seconds > 0){
      seconds--;
      milliSeconds = 99;
     }
     else if(minutes > 0){
      minutes--;
      seconds = 59;
      milliSeconds = 99;
     }
      else if(hours>0){
      hours--;
      minutes = 59;
      seconds = 59;
      milliSeconds = 99;
     }
     else{
      clearInterval(timerId);
      getElement("start").innerHTML = "Start";
      timerStarted = false;
     }
      updateDisplay();
    },10);
      },1000);
}
else if(hours==0 && minutes ==0 && seconds ==0 && milliSeconds==0 ){
  alert("Invalid timer!");
}
else{
  getElement("start").innerHTML = "Resume";
  timerStarted = false;
  clearInterval(timerId);
}
}
function stopTimer(){
  clearInterval(timerId);
  seconds = 0;
  minutes = 0;
  hours = 0;
  milliSeconds = 0;
  getElement("start").disabled = true;
  getElement("stop").disabled = true;
}
function makeTimer(){
  getElement("start").innerHTML = "Start";
  getElement("start").disabled = false;
  getElement("stop").disabled = false;
  let inputSeconds = Number(getElement("seconds").value);
  let inputMinutes = Number(getElement("minutes").value);
  let inputHours = Number(getElement("hours").value);
  seconds = inputSeconds % 60;
  minutes = (Math.floor(inputSeconds/60) + inputMinutes % 60)%60;
  hours = Math.floor((inputMinutes + (inputSeconds/60))/60) + inputHours;
  updateDisplay();
}
function resetTimer()
{
  seconds = 0;
  minutes = 0;
  hours = 0;
  milliSeconds = 0;
  getElement("start").innerHTML = "Start";
  getElement("seconds").value = "";
  getElement("minutes").value = "";
  getElement("hours").value = "";
  updateDisplay();
  getElement("start").disabled = false;
  getElement("stop").disabled = false;
   }
function updateDisplay()
{
        getElement("display").innerHTML =   String(hours).padStart(2,"0") + ":" + String(minutes).padStart(2,"0") + ":" + String(seconds).padStart(2,"0");
}
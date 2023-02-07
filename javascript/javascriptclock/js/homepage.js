let username;

username = prompt("Enter your name : ");

let myName = document.querySelector("#myName");
myName.innerHTML = username;
let myClock = document.querySelector("#myClock");

function showTime() {
    var d = new Date();  
    daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    
    myClock.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ${daylist[d.getDay()]}`;
}

setInterval(showTime, 1000);
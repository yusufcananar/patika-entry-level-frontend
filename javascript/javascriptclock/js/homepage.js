let username;

username = prompt("Enter your name : ");

let myName = document.querySelector("#myName");
myName.innerHTML = username;
let myClock = document.querySelector("#myClock");

daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

function showTime() {
    var d = new Date();  
    
    
    myClock.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ${daylist[d.getDay()]}`;
}

setInterval(showTime, 1000);
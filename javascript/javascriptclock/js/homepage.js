let username;

username = prompt("Enter your name : ");

let myName = document.querySelector("#myName");
myName.innerHTML = username;
let myClock = document.querySelector("#myClock");

function showTime() {
    var d = new Date(); 
    
    d.getHours(); 
    d.getMinutes(); 
    d.getSeconds(); 
    myClock.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}

setInterval(showTime, 1000);
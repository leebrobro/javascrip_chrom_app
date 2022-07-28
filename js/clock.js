const clock = document.querySelector("h2#clock");

function sayHello(){
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hour} : ${minute} : ${second}`;
}

sayHello();
setInterval(sayHello, 1000);

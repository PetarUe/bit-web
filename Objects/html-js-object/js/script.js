

function hello() {
    console.log("Hello!")
}

hello()

function nav() {
    console.log(window.navigator.appVersion);
    console.log(window.navigator.vendor);
    console.log(window.navigator.platform);
}
nav()

function isOnline() {
    if (window.navigator.isOnline === true) {
        console.log('Online')
    } else {
        console.log('offline')
    }
}

isOnline()



function info() {
    console.log(window.screen.availHeight);
    console.log(window.screen.availWidth);
    console.log(window.screen.height);
}
info();

function loc() {
    console.log(window.location.href);
    console.log(window.location.host);
    console.log(window.location.hostname);
    console.log(window.location.protocol);
    console.log(window.location.search);

}
loc();
/*
function reload() {
    window.location.reload();
} */

/*
function site() {
    window.location.href = 'https://www.google.com/';
}

site();


function storage() {
    window.localStorage.setItem(key, value);
}

function read() {
    if (window.localStorage.setItem(keyName)===undefined) {
        console.log('there is no data');
    }else {
        console.log(window.sessionStorage.getItem(keyName));
    }
}
functoin remove() {
    window.screen

*/

/*
function storage() {
    window.localStorage.setItem("product", "500500");
}
storage();

function getstorage() {
    window.localStorage.getItem("product");
}
getstorage();


function backf() {
    window.history.back();
}
backf();

function forward() {
    window.history.forward();
}
forward();


function opening() {
    window.open("https://www.intersport.rs/muskarci/outlet?cat=6499&p=2");
}
opening();

function exm() {
    alert("nesto se zeznulo da stranici");
}

exm();
*/




function boo() {
    alert("Opet se nesto pokvarilo");
}
setTimeout(boo, 3000);



function pro() {
    var userInput = prompt("do you like plasma?")
    var userChoice = confirm("We will submit this answer now! " + userInput);
    if (userChoice === true) {
        alert("toeto")
    }
}
pro();

function opening() {
    window.open("https://www.intersport.rs/muskarci/outlet?cat=6499&p=2");
}
opening();











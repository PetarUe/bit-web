// function changeColor() {

//     var firstDiv = document.querySelector('div');
//     if (firstDiv.classList.contains("first")) {

//         firstDiv.classList.remove("first");
//         firstDiv.classList.add("second");

//     } else if (firstDiv.classList.contains("second")) {

//         firstDiv.classList.remove("second");
//         firstDiv.classList.add("first");

//     }

// }
// function turnOff() {
//     var BToggle = document.getElementById("toggleButton");
//     BToggle.removeAttribute("onclick");
// }

var sendButton = document.getElementById('sendInput')

function sendText() {
    var divInterface = document.querySelector(".chatRoom");
    var textInput = document.getElementById("textInput");
    var message = document.createElement('span');
    message.textContent = textInput.value;

    divInterface.appendChild(message);
    textInput.value = "";
}

sendButton.addEventListener("click", sendText);



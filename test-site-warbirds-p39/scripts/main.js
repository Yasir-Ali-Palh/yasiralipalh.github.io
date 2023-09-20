// change image by clicking on image

let myImage = document.querySelector("img");

myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/p39.jpg") {
        myImage.setAttribute("src", "images/p39b.jpg");
    } else {
        myImage.setAttribute("src", "images/p39.jpg");
    }
};

// h1 greets the user by prompting for their name

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("Name", myName);
        myHeading.textContent = 'Hi ' + myName + '!';
    }
};

if (!localStorage.getItem("Name")) {
    setUserName();
} else {
    let mySavedName = localStorage.getItem("Name");
    myHeading.textContent = 'Hi ' + mySavedName + '!';
};

myButton.onclick = () => {
    setUserName();
}
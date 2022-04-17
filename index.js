window.addEventListener("DOMContentLoaded", function () {
    disableAll();
});

function disableAll() {
    document.getElementById("Section2").disabled = true;
    document.getElementById("Section3").disabled = true;
}

function enableNewUser() {
    document.getElementById("Section2").disabled = false;
}

function enableExistingUser() {
    document.getElementById("Section3").disabled = false;
}

function welcome() {
    let name = document.getElementById("UserName1").value;
    alert("Welcome " + name);
}

function welcomeBack() {
    let name = document.getElementById("UserName2").value;
    alert("Welcome back " + name);
}



const button = document.getElementById("button");


function clickButton(){
    
    var popup = document.getElementById("popup");
    popup.style.display = "block";

    console.log("Popup");
}

button.addEventListener("click", clickButton);
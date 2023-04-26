let checkBoxElement = document.querySelector("#checkbox");
let passwordElement = document.querySelector("#password");

checkBoxElement.addEventListener('change', (event) => {
    if(event.target.checked){
        passwordElement.setAttribute("type", "text");
    }
    else{
        passwordElement.setAttribute("type", "password");
    }
})
// JavaScript source code
let form = document.getElementById("form");
let textInput = document.getElementById("textInput");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    formValidation();
});

let formValidation = () => {
    if (textInput.value === "") {
        console.log('Failure');
    } else {
        console.log('Success')
    }
};
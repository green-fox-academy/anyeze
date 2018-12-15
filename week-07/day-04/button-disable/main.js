'use strict'


let signUpButton = document.querySelector('.signup');
let iLoveCatsButton = document.querySelector('.lovecats');
let catFacts = document.querySelector('.catfacts');
let form = document.querySelector('form');

let isViktorChecked = false;
let signUp = true;

form.addEventListener("change", event => {

    let target = event.target.id;

    if (target === "cat" || target === "dog") {
        isViktorChecked = false;
        signUpButton.removeAttribute("disabled");
    } else if (target === "yes") {
        signUp = true;
        iLoveCatsButton.removeAttribute("disabled");
    }else if(target === 'no'){
        if (isViktorChecked) {
            signUpButton.removeAttribute("disabled");
        }
    } else if (target === "goldfish" && signUp) {
        isViktorChecked = true;
        signUpButton.removeAttribute("disabled", 'true');
    } else if (target === "goldfish" && !signUp) {
        isViktorChecked = true;
        signUp = true;
        signUpButton.removeAttribute("disabled");
    } else if (target === "no" && !isViktorChecked) {
        signUp = false;
        iLoveCatsButton.removeAttribute("disabled", 'true');
    } else if (target === "no" && isViktorChecked) {
        signUp = false;
        iLoveCatsButton.removeAttribute("disabled", 'true');
        signUpButton.removeAttribute("disabled");
    }
})

iLoveCatsButton.addEventListener('click', event => {
    event.preventDefault();
    alert('Thank you, you\'ve successfully signed up for cat facts')
})

signUpButton.addEventListener('click', event => {
    if (isViktorChecked && !signUp) {
        event.preventDefault();
        alert('Sigh, we still added you to the cat facts list');
    } else {
        event.preventDefault();
        alert('Thank you, you\'ve successfully signed up for cat facts');
    }
}
)

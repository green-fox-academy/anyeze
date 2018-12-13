'use strict'


let signUpButton = document.querySelector('.signup');
let iLoveCatsButton = document.querySelector('.lovecats');
let catFacts = document.querySelector('.catfacts');
let form = document.querySelector('form');
let dog = document.querySelector('#dog');
let cat = document.querySelector('#cat');
let pet = document.querySelector('.pet');
let btn = document.querySelector('.button');

form.addEventListener("change", (event) => {
    

  let target = event.target.id;

    if(target === "cat" || target === "dog" ){
        signUpButton.removeAttribute("disabled");
        signUpButton.addEventListener("click", () =>{
            alert("Thank you, you've successfully signed up for cat facts")
        })
    }else if(target === "yes"){
        iLoveCatsButton.removeAttribute("disabled");
        iLoveCatsButton.addEventListener("click", () =>{
            alert("Thank you, you've successfully signed up for cat facts")
        })
    }else if(target === "Viktor"){
        signUpButton.removeAttribute("disabled");
        signUpButton.addEventListener("click", () =>{
            alert("Sigh, we still added you to the cat facts list")
        })
    
     
    }
})



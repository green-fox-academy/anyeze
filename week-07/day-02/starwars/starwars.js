'use strict'

var url = "https://swapi.co/api/people/"
let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);

xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            console.log(response.results);
            response.results.forEach(e => {
                console.log(e.name)
                let body = document.querySelector('body');
                let list = document.createElement('ul');
                let li = document.createElement('li');
                body.appendChild(list)
                list.appendChild(li);
                li.innerText = e.films;
            });

        }
    }
}
xhr.send();


let body = document.querySelector('body');
let label = document.createElement('h1');
let inputField = document.createElement('input');
let btn = document.createElement('button');



body.appendChild(label);
label.innerText = "Enter a character name";
inputField.type = "text";
btn.innerText = "Search";
body.appendChild(inputField);
body.appendChild(btn);




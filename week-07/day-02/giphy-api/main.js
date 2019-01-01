'use strict'

const myApiKey = 'wS1TLtmLbCysrjk0x1DTXLQtZGACcDcb';
const url = `https://api.giphy.com/v1/gifs/search?api_key=${myApiKey}&q=funny+cat&limit=16&offset=0&rating=G&lang=en`;

let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);

xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            console.log(response.data);
            response.data.forEach(e => {
                let container = document.querySelector('div');
                let images = document.createElement('img');
                container.appendChild(images);
                images.src = e.images.original_still.url;
                images.onclick = () => {
                    if (images.src === e.images.downsized_medium.url) {
                        images.src = e.images.original_still.url;
                    } else {
                        images.src = e.images.downsized_medium.url;
                    }
                }
            });
        }
    }
}
xhr.send();


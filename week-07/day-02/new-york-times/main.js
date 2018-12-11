'use strict'

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=14615f9ac6e54bf2b264b431b36c1448&q=the+moon+landing+by+Apollo+11";

let xhr = new XMLHttpRequest();
xhr.open('GET', url, true);

xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            console.log(response.response.docs);
            response.response.docs.forEach(e => {
                let body = document.querySelector('body');
                let article = document.createElement('article');
                let headline = document.createElement('h1');
                let snippet = document.createElement('p');
                let publicationDate = document.createElement('p1');
                let permaLink = document.createElement('a');

                body.appendChild(article);
                article.appendChild(headline);
                article.appendChild(snippet);
                article.appendChild(publicationDate);
                article.appendChild(permaLink);

                headline.innerText = e.headline.main;
                snippet.innerText = e.snippet;
                permaLink.href = e.web_url;
                permaLink.innerText = "\r\n Go to page";
                publicationDate.innerText = e.pub_date;

            });
        }
    }
}
xhr.send();
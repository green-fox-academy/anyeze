'use strict'

const url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=14615f9ac6e54bf2b264b431b36c1448&q=the+moon+landing+by+Apollo+11";

const xhr = new XMLHttpRequest();
xhr.open('GET', url, true);

xhr.onreadystatechange = () => {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		if (xhr.status === 200) {
			const response = JSON.parse(xhr.responseText);
			console.log(response.response.docs);
			response.response.docs.forEach(e => {
				const body = document.querySelector('body');
				const article = document.createElement('article');
				const headline = document.createElement('h1');
				const snippet = document.createElement('p');
				const publicationDate = document.createElement('p1');
				const permaLink = document.createElement('a');

				headline.innerText = e.headline.main;
				snippet.innerText = e.snippet;
				permaLink.href = e.web_url;
				permaLink.innerText = '\r\n Go to page';
				publicationDate.innerText = e.pub_date;

				body.appendChild(article);
				article.appendChild(headline);
				article.appendChild(snippet);
				article.appendChild(publicationDate);
				article.appendChild(permaLink);
			});
		}
	}
}
xhr.send();
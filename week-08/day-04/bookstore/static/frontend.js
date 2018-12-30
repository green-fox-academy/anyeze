'use strict'

const xhr = new XMLHttpRequest();
xhr.open('GET', '/books');
xhr.onload = () => {
  if (xhr.status === 200) {
    const res = JSON.parse(xhr.responseText);
    table(res);
    selectCategory(res);
  }
}
xhr.send();

const div = document.querySelector('div');
const form = document.createElement('form');
const selectScience  = document.createElement('select');

const selectCategory = (data) => {
  
  const selectTech = document.createElement('select');
  
  data.forEach(e => {
    console.log(data)
    const options = document.createElement('option');
     options.textContent = e.cate_descrip;
     selectTech.appendChild(options);
     div.appendChild(selectTech);
    
})
}

const table = (data) => {
  const tr = document.createElement('tr');
  const thTitle = document.createElement('th');
  const thAuthName = document.createElement('th');
  const thCat = document.createElement('th');
  const thPubName = document.createElement('th');
  const thPrice = document.createElement('th');

  thTitle.textContent = "BOOK TITLE";
  thAuthName.textContent = "AUTHOR NAME";
  thCat.textContent = "CATEGORY";
  thPubName.textContent = "PUBLISHER NAME";
  thPrice.textContent = "PRICE";

  tr.appendChild(thAuthName);
  tr.appendChild(thTitle);
  tr.appendChild(thCat);
  tr.appendChild(thPubName);
  tr.appendChild(thPrice);
  div.appendChild(tr);

  data.forEach(e => {
  
    const tr = document.createElement('tr');
    const tdTitle = document.createElement('td');
    const tdAuth = document.createElement('td');
    const tdCat = document.createElement('td');
    const tdPub = document.createElement('td');
    const tdPrice = document.createElement('td');

    tdTitle.textContent = e.book_name;
    tdAuth.textContent = e.aut_name;
    tdCat.textContent = e.cate_descrip;
    tdPub.textContent = e.pub_name;
    tdPrice.textContent = e.book_price + ' $';

    tr.appendChild(tdTitle);
    tr.appendChild(tdAuth);
    tr.appendChild(tdCat);
    tr.appendChild(tdPub);
    tr.appendChild(tdPrice);
    div.appendChild(tr);

  });

}


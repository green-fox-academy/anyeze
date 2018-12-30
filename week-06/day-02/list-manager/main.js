const body = document.querySelector('body');
const theItems = ['milk', 'bread', 'orange', 'tomato'];

const list = document.createElement('ul');
list.setAttribute('id', 'list');

let selectedIndex = 0;

theItems.forEach((e, i) => {
  let newItem = document.createElement('li');
  newItem.innerHTML = e;
  newItem.setAttribute('id', e)
  if (i === 0) {
    newItem.setAttribute('style', 'background-color: khaki')
  }
  list.appendChild(newItem);
});

body.appendChild(list);

const buttons = document.createElement('ul');

const up = document.createElement('button');
up.setAttribute('id', 'up');

const down = document.createElement('button');
down.setAttribute('id', 'down');

const remove = document.createElement('button');
remove.setAttribute('id', 'remove');

const move = document.createElement('button');
move.setAttribute('id', 'move');

up.innerHTML = 'UP';
buttons.appendChild(up);
down.innerHTML = 'DOWN';
buttons.appendChild(down);
remove.innerHTML = 'X';
buttons.appendChild(remove);
move.innerHTML = '>';
buttons.appendChild(move);

body.appendChild(buttons);

const upButton = document.querySelector('#up');
const downButton = document.querySelector('#down');
const removeButton = document.querySelector('#remove');
const moveButton = document.querySelector('#move');

const colorOfSelected = (giveColor, removeColor) => {
  giveColor.setAttribute('style', 'background-color: khaki');
  removeColor.setAttribute('style', 'background-color: white');
}
upButton.onclick = () => {
  if (selectedIndex !== 0 && document.querySelector('#list').querySelectorAll('li').length !== 0) {
    selectedIndex--;
    let giveColor = document.querySelector('#list').childNodes[selectedIndex];
    let removeColor = document.querySelector('#list').childNodes[selectedIndex + 1];
    colorOfSelected(giveColor, removeColor);
  }
}
downButton.onclick = () => {
  if (selectedIndex !== document.querySelector('#list').querySelectorAll('li').length - 1 && document.querySelector('#list').querySelectorAll('li').length !== 0) {
    selectedIndex++;
    let giveColor = document.querySelector('#list').childNodes[selectedIndex];
    let removeColor = document.querySelector('#list').childNodes[selectedIndex - 1];
    colorOfSelected(giveColor, removeColor);
  }
}

const selectedBox = document.createElement('ul');
body.appendChild(selectedBox)

moveButton.onclick = () => {
  if (document.querySelector('#list').querySelectorAll('li').length >= 1) {
    let newListElement = document.createElement('li');
    newListElement.innerHTML = list.childNodes[selectedIndex].textContent;
    selectedBox.appendChild(newListElement);
    list.removeChild(list.childNodes[selectedIndex]);
  }
  if (document.querySelector('#list').querySelectorAll('li').length !== 0) {
    list.childNodes[0].setAttribute('style', 'background-color: khaki');
    selectedIndex = 0;
  }
}
removeButton.onclick = () => {
  if (document.querySelector('#list').querySelectorAll('li').length >= 1) {
    list.removeChild(list.childNodes[selectedIndex]);
  }
  if (document.querySelector('#list').querySelectorAll('li').length !== 0) {
    list.childNodes[0].setAttribute('style', 'background-color: khaki');
    selectedIndex = 0;
  }
};

/*
    <!-- You can work in the html or in a separate js file. Like:
    <script>
      1. store the element that says 'The King' in the 'king' variable.
      console.log it.
      2. store 'The Businessman' and 'The Lamplighter'
      in the 'businessLamp' variable.
      console.log each of them.
      3. store 'The King' and 'The Conceited Man'
      in the 'conceitedKing' variable.
      alert them one by one.
      4. store 'The King', 'The Conceited Man' and 'The Lamplighter'
      in the 'noBusiness' variable.
      console.log each of them.
    </script>
   */ 
const king = document.querySelector('.asteroid');
console.log(king);

const businessLamp = document.querySelectorAll('.asteroidBig, .asteroid b329 big');
businessLamp.forEach(e =>{
    console.log(e);
});

const conceitedKing = document.querySelectorAll('.asteroid, .asteroid b326');
conceitedKing.forEach(e => {
    console.log(e)
});

const noBusiness = document.querySelectorAll('.asteroidBig, .asteroid b329 big, .asteroid');
noBusiness.forEach(e => {
    console.log(e);
})
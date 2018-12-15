
    /*<!-- You can work in the html or in a separate js file. Like:
    <script>
      Write the image's url to the console.
      Replace the image with a picture of your favorite animal.
      Make the link point to the Green Fox Academy website.
      Disable the second button.
      Replace its text with 'Don't click me!'.
    </script>
    OR*/

const image = document.querySelector('img');
console.log(image.src);
image.setAttribute('src', "https://www.catster.com/wp-content/uploads/2015/06/santa-cat-2.jpg");

let link = document.querySelector('a');
link.setAttribute('href', 'https://www.greenfoxacademy.com/');

let button = document.querySelector(".this-one");

//button.disabled = true;
button.setAttribute('disabled', 'disabled')

button.innerHTML = 'Don\'t click me!';

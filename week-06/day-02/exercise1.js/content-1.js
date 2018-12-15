/*<!-- You can work in the html or in a separate js file. Like:
<script>
1)  Fill every paragraph with the last one's content.
2)  Do the same again, but you should keep the cat strong.
</script>
OR*/

/*1*/
const body = document.querySelectorAll('p');
body.forEach(e => {
    console.log(e.innerText = 'goat rabbit <strong>cat</strong> dog ')
})
/*2*/
const body = document.querySelectorAll('p');
body.forEach(e => {
    console.log(e.innerHTML = 'goat rabbit <strong>cat</strong> dog ')
})
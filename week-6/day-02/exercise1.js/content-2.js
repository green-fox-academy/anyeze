
    /*<!-- You can work in the html or in a separate js file. Like:
    <script>
      1) replace the list items' content with items from this list:
      ['apple', 'banana', 'cat', 'dog']
      2) change the <ul> element's background color to 'limegreen'
        - use css class to change the color instead of the style property
    </script>
    OR*/


    /*1*/

    const listItems = document.querySelectorAll('li');
    let list = ['apple', 'banana', 'cat', 'dog'];

    for(let i = 0; i < list.length; i++){
        listItems[i].textContent = list[i];
    }
   
    
    
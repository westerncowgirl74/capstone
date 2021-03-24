document.addEventListener('DOMContentLoaded', function () {

    fetch('games.json')
        .then(response => response.json())
        .then(data => {

         console.log(data);
        });  
    })
'use strict';

function getDogImage() {
    const options = {method: 'GET'};
    fetch('https://dog.ceo/api/breeds/image/random/3 Fetch!' , options)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
    
}


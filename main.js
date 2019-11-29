'use strict';

function getDogImages(numberInput) {
    if(numberInput < 3) {
        fetch("https://dog.ceo/api/breeds/image/random/3")
            .then(response => response.json())
            .then(responseJson => console.log(responseJson));
    }
    else if (numberInput > 50) {
        return alert('Please choose a number that is equal to or less than 50');
    }
    else {
        fetch(`https://dog.ceo/api/breeds/image/random/${numberInput}`)
            .then(response => response.json())
            .then(responseJson => console.log(responseJson));
    }
}

function userInput() {
    $('#dog-input-form').submit(e => {
        e.preventDefault();
        let numberInput = $('#number-dog').val();
        getDogImages(numberInput);
    });
}

$(function() {
    console.log('App is loading!');
    userInput();
})



// console.log(document.getElementsByTagName('p')[2]);

// console.log(document.getElementsByClassName('italics'));

// console.log(document.getElementById('dom'));

// console.log(document.getElementById('welcome'));

// let welcomeText = document.getElementById('welcome');

// welcomeText.textContent = 'This page will help you understand how to manipulate the Document Object Model using JavaScript.';

let paraItalics = document.getElementsByClassName('italics');
let wordLengthElements = document.getElementsByClassName('wordLength');

for (let index = 0; index < paraItalics.length; index++) {
    // console.log(paraItalics[index].textContent.split(' ').length);
    wordLengthElements[index].textContent = `Words: ${paraItalics[index].textContent.split(' ').length}`;
}
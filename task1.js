/*function splitString(stringToSplit, separator) {
    let arrayOfStrings = stringToSplit.split(separator);

    console.log('Оригінальний рядок: "' + stringToSplit + ' "" ');
    console.log('Роздільник: " ' + separator + ' "" ');
    console.log('Масив має: ' + arrayOfStrings.length + ' слів' + ' ' + arrayOfStrings.join('/'));
}
var nameString = 'Ще не вмерли України, ні слава, ні воля';
var space = ' ';
splitString(nameString, space);*/

const str = "Це рядок, який потрібно розбити на слова.";
const words = str.split(" ");
console.log(words);

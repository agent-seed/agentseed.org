var backgrounds = [
    'C:/img24.jpg',
    'C:/img25.jpg',
    'C:/img26.jpg',
    'C:/img27.jpg'

]
var backgroundLength = backgrounds.length;
function changeBackground() {
var num = randomNumber(backgroundLength);
let root = document.documentElement;
root.style.setProperty('--background', 'url(' + backgrounds[num] + ')');
}
function randomNumber(max) {
return Math.floor(Math.random() * max);
}
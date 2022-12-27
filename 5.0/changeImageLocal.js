// this file was designed for local testing, I didn't have internet access at the time but I still wanted the changeImage script to work, so I wrote this.
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
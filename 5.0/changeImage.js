var backgrounds = [
    'https://images.unsplash.com/photo-1666904093866-bacfa77008f2',
    'https://images.unsplash.com/photo-1666811059629-f052240cde19',
    'https://images.unsplash.com/photo-1663947718652-fa32fb546da2',
    'https://images.unsplash.com/photo-1666878093953-18a02f217e9a',
    'https://images.unsplash.com/photo-1666543257223-095dcc9a12fd',
    'https://images.unsplash.com/photo-1666694421187-75957423ee77',
    'https://images.unsplash.com/photo-1666018092132-7649cf4cd0b0',
    'https://images.unsplash.com/photo-1650829072818-2a460af64c8b',
    'https://images.unsplash.com/photo-1666543257605-c3266fc6ea25',
    'https://images.unsplash.com/photo-1666126452579-f032d653c7f1',
    'https://images.unsplash.com/photo-1665944763019-437c1dc48320',
    'https://images.unsplash.com/photo-1538577772734-5fe3b8b8df03',
    'https://images.unsplash.com/photo-1525864547490-9d993bfcf786'

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
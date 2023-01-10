
function changeTheme() {
let root = document.documentElement;
var theme = 'dark';
if (theme = 'dark') {
    root.style.setProperty('--text-color', 'black');
    root.style.setProperty('--panel-color', 'rgba(255, 255, 255, 0.5');
    theme = 'light';
} else if (theme = 'light') {
    root.style.setProperty('--text-color', 'white');
    root.style.setProperty('--panel-color', 'rgba(0, 0, 0, 0.5');
    theme = 'dark';
}
}
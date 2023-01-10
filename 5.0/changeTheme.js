var theme = 0;
function changeTheme() {
    let root = document.documentElement;
    if (theme === 0) {
        root.style.setProperty('--text-color', 'black');
        root.style.setProperty('--panel-color', 'rgba(255, 255, 255, 0.5');
        root.style.setProperty('--background-color', 'white');
        theme = 1
    } else if (theme === 1) {
        root.style.setProperty('--text-color', 'white');
        root.style.setProperty('--panel-color', 'rgba(0, 0, 0, 0.5');
        root.style.setProperty('--background-color', '#111');
        theme = 0
}}
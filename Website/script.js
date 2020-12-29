const darkButton = document.getElementById("light-dark-button");
const body = document.body;
var darkMode = false;

const theme = localStorage.getItem("theme");
const themeIcon = localStorage.getItem("icon");

console.log(theme)

if (theme) {
    body.classList.add(theme);
    darkButton.classList.add(themeIcon);
    darkMode = (theme!="light");
} else {
    body.classList.add("light");
    darkButton.classList.add("fa-moon");
}

darkButton.onclick = () => {
    if (darkMode) {
        body.classList.replace("dark", "light");
        localStorage.setItem("theme", "light");
        darkButton.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("icon", "fa-moon");
    } else {
        body.classList.replace("light", "dark");
        localStorage.setItem("theme", "dark");
        darkButton.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("icon", "fa-sun");
    }
    darkMode = !darkMode;
};
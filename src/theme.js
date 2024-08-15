/**
 * theme
 */
var dark_mood = document.querySelector("[data-dark-mood]");
var light_mood = document.querySelector("[data-light-mood]");
var logo_dark = document.querySelector("[data-logo-dark]");
var logo_light = document.querySelector("[data-logo-light]");
var HTML = document.documentElement;
// localStorage
if (localStorage.length != 0) {
    if (localStorage.HTML) {
        HTML.dataset.theme = localStorage.HTML;
    }
    ;
    if (localStorage.dark_mood) {
        dark_mood.classList.add(localStorage.dark_mood);
    }
    ;
    if (localStorage.light_mood) {
        light_mood.classList.add(localStorage.light_mood);
    }
    ;
    if (localStorage.logo_dark) {
        logo_dark.classList.add(localStorage.logo_dark);
    }
    ;
    if (localStorage.logo_light) {
        logo_light.classList.add(localStorage.logo_light);
    }
    ;
}
;
// dark mood
function darkMood() {
    HTML.dataset.theme = "dark";
    dark_mood.classList.add("active");
    light_mood.classList.add("active");
    logo_dark.classList.add("active");
    logo_light.classList.add("active");
    // save locaStorage
    localStorage.setItem("HTML", "dark");
    localStorage.setItem("dark_mood", "active");
    localStorage.setItem("light_mood", "active");
    localStorage.setItem("logo_dark", "active");
    localStorage.setItem("logo_light", "active");
}
;
dark_mood.addEventListener("click", darkMood);
// light mood
function lightMood() {
    HTML.dataset.theme = "light";
    dark_mood.classList.remove("active");
    light_mood.classList.remove("active");
    logo_dark.classList.remove("active");
    logo_light.classList.remove("active");
    // save locaStorage
    localStorage.setItem("HTML", "light");
    localStorage.setItem("dark_mood", "");
    localStorage.setItem("light_mood", "");
    localStorage.setItem("logo_dark", "");
    localStorage.setItem("logo_light", "");
}
;
light_mood.addEventListener("click", lightMood);

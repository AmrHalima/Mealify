const themeSwitch = document.getElementById("theme-switch");
let isDarkmode = 0;
const switchIcon = document.getElementById("inner-icon");
const enableDarkmode = () => {
    document.body.classList.add("darkmode");
};
const disableDarkmode = () => {
    document.body.classList.remove("darkmode");
};
themeSwitch.addEventListener("click", () => {
    if (isDarkmode == 0) {
        enableDarkmode();
        isDarkmode = 1;
        document.querySelectorAll(".team-shape").forEach((img) => {
            img.src = "./images/images/team-shape-dark.svg";
        });
        switchIcon.classList = "fa-regular fa-sun fa-2x";
    } else {
        disableDarkmode();
        isDarkmode = 0;
        document.querySelectorAll(".team-shape").forEach((img) => {
            img.src = "./images/images/team-shape.svg";
        });
        switchIcon.classList = "fa-solid fa-moon fa-2x";
    }
});

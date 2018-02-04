var navButton = document.querySelector(".navigation-menu-button img");
if (navButton.addEventListener) {
    navButton.addEventListener("click", function () {
        var nav = document.querySelector(".nav-bar ul");
        if (nav.style.display === "block") {
            nav.style.display = "none";
        } else {
            nav.style.display = "block";
        }
    }, false);
} else if (navButton.attachEvent) {
    navButton.attachEvent("onclick", function () {
        var nav = document.querySelector(".nav-bar ul");
        if (nav.style.display === "block") {
            nav.style.display = "none";
        } else {
            nav.style.display = "block";
        }
    });
}
var creds = readCookie("creds");
var auth = readCookie("auth");
if (creds === null) {
    window.location.href = "login.html?auth=failed";
} else if (auth !== "1") {
    window.location.href = "login.html?auth=failed";
}

document.querySelector("#logout").addEventListener("click", function() {
    eraseCookie("auth");
});
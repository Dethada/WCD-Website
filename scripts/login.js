document.querySelector("#login-form input[type=submit]").addEventListener("click", function() {
    var creds = readCookie("creds").split(":");
    var username = document.querySelector("#login-form input[type=text]").value;
    var password = document.querySelector("#login-form input[type=password]").value;
    if (creds !== null && username === creds[0] && password === creds[1]) {
        setCookie("auth", 1, 7);
    } else {
        eraseCookie("auth");
        alert("Invalid Username/Password");
    }
});
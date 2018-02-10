// Display login failed message
function loginFailed() {
    var formP = document.querySelector("#login-form p");
    if (formP === null) {
        var form = document.querySelector("#login-form");
        var errMsg = document.createElement("p");
        errMsg.style.color = "#990000";
        errMsg.innerHTML = "Invalid Username/Password";
        form.appendChild(errMsg);
    }
}

function validateLogin() {
    var creds = readCookie("creds").split(":");
    var username = document.querySelector("#login-form input[type=text]").value;
    var password = document.querySelector("#login-form input[type=password]").value;
    if (creds !== null && username === creds[0] && password === creds[1]) {
        setCookie("auth", 1, 7);
        return true;
    } else {
        event.preventDefault();
        eraseCookie("auth");
        loginFailed();
        document.querySelector("#login-form input[type=text]").value = "";
        document.querySelector("#login-form input[type=password]").value = "";
        return false;
    }
}

// display login failed msg when redirected from console page
if (location.search.substring(1) === 'auth=failed') {
    loginFailed();
}
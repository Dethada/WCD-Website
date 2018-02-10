// display error msg
function errMsg(msg) {
    var formP = document.querySelector("#login-form p");
    if (formP === null) {
        var form = document.querySelector("#login-form");
        var errMsg = document.createElement("p");
        errMsg.style.color = "#990000";
        errMsg.innerHTML = msg;
        form.appendChild(errMsg);
    } else {
        formP.innerHTML = msg;
    }
}

// validate registration form
function validateForm() {
    var pw = document.querySelector("#login-form #pw1").value;
    if (pw !== document.querySelector("#login-form #pw2").value) {
        event.preventDefault();
        errMsg("Passwords do not match!");
        return false;
    } else if (pw.length < 8) {
        event.preventDefault();
        errMsg("Password cannot be less than 8 characters!");
        return false;
    }
    return true;
}
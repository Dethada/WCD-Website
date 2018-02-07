setCookie("creds", "test:password", 7);
document.querySelector("#login-form input[type=submit]").addEventListener("click", function() {
    var username = document.querySelector("#login-form input[type=text]").value;
    var password = document.querySelector("#login-form input[type=password]").value;
});
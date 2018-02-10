/* 
creds index
0 - username
1 - password
2 - email
3 - plan
*/
var creds = readCookie("creds"); // credentails cookie
var auth = readCookie("auth"); // authentication cookie
if (creds === null || auth !== "1") {
    window.location.href = "login.html?auth=failed";
}

// logout
document.querySelector("#logout").addEventListener("click", function() {
    eraseCookie("auth");
});
creds = creds.split(":");;
// user welcome message
document.querySelector(".sidenav p").innerHTML = "Welcome, " + creds[0];
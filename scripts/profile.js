/* 
creds index
0 - username
1 - password
2 - email
3 - plan
*/
var creds = readCookie("creds").split(":");
// set username
document.querySelector("#username p").innerHTML = creds[0];
// set email
document.querySelector("#email p").innerHTML = creds[2];
document.querySelector("#plan p").innerHTML = creds[3];
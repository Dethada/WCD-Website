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
var maxSpace;
if (creds[3] === "Basic") {
    maxSpace = "5 GB";
} else if (creds[3] === "Pro") {
    maxSpace = "100 GB";
} else {
    maxSpace = "Unlimited";
}
// Display storage space available
document.querySelector("#storage p").innerHTML = "Using 0 MB of " + maxSpace;
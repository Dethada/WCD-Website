var formData = location.search.substring(1);
while (formData.indexOf("+") !== -1) {
   formData = formData.replace("+", " ");
}
var formArray = decodeURIComponent(formData).split("&");
var result = document.getElementById("result");
// display all submitted data
for (var i = 0; i < formArray.length; i += 1) {
    formArray[i] = formArray[i].split("=");
    if (formArray[i][0] == 'password2') {
        continue;
    }
    var content = document.createElement("p");
    if (formArray[i][0] == 'password1') {
        content.innerHTML = 'Password: ' + formArray[i][1];
    } else {
        content.innerHTML = formArray[i][0].charAt(0).toUpperCase() + formArray[i][0].substr(1) + ': ' + formArray[i][1];
    }
    result.appendChild(content);
}
setCookie("creds", formArray[0][1]+":"+formArray[2][1]+":"+formArray[1][1]+":"+formArray[4][1], 99999999);
var formData = location.search.substring(1);
while (formData.indexOf("+") !== -1) {
   formData = formData.replace("+", " ");
}
var formArray = decodeURIComponent(formData).split("&");
var result = document.getElementById("result");
// display all submitted data
for (var i = 0; i < formArray.length; i += 1) {
    var content = document.createElement("p");
    content.innerHTML = formArray[i];
    result.appendChild(content);
    formArray[i] = formArray[i].split("=");
}
console.log(formArray);
// data validation here?
setCookie("creds", formArray[0][1]+":"+formArray[2][1]+":"+formArray[1][1]+":"+formArray[8][1], 99999999);
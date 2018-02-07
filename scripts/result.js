var formData = location.search;
formData = formData.substring(1, formData.length);
while (formData.indexOf("+") !== -1) {
    formData = formData.replace("+", " ");
}
formData = decodeURIComponent(formData);
var formArray = formData.split("&");
var result = document.getElementById("result");
console.log(formArray);
for (var i = 0; i < formArray.length; i = i + 1) {
    var content = document.createElement("p");
    content.innerHTML = formArray[i];
    result.appendChild(content);
}
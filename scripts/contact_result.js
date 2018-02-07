var formData = location.search.substring(1);
while (formData.indexOf("+") !== -1) {
   formData = formData.replace("+", " ");
}
var formArray = decodeURIComponent(formData).split("&");
var result = document.getElementById("result");
for (var i = 0; i < formArray.length; i += 1) {
    var content = document.createElement("p");
    content.innerHTML = formArray[i];
    result.appendChild(content);
}
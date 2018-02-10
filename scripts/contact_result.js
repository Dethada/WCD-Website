// Parse URI
var formData = location.search.substring(1);
while (formData.indexOf("+") !== -1) {
   formData = formData.replace("+", " ");
}
var formArray = decodeURIComponent(formData).split("&");
var result = document.getElementById("result");
// Display Parsed data
for (var i = 0; i < formArray.length; i += 1) {
    formArray[i] = formArray[i].split("=");
    var content = document.createElement("p");
    content.innerHTML = formArray[i][0].charAt(0).toUpperCase() + formArray[i][0].substr(1) + ': ' + formArray[i][1];
    result.appendChild(content);
}
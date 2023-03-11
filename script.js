
const form = document.querySelector("#feedback-form");
var radios = document.getElementsByName('rating');

form.addEventListener("submit", function(e) {
	e.preventDefault();
    // alert("This is an alert!");
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            alert("Thank you for the " + radios[i].value + " star rating!");
            break;
        }
    }
});

function ToggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark");
 }

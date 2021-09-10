var translateButton = document.querySelector("#translate-button");
translateButton.addEventListener("click", buttonClickHandler)

var translateInput = document.querySelector("#translate-input");

var translateOutput = document.querySelector("#translate-output");

function constructURL(input) {
    return url + "?" + "text=" + input
}
function errorHandler(error) {
    console.log("Error occured", error)
    alert("Something is wrong. Please try again later.")
}

var url = "https://api.funtranslations.com/translate/minion.json"

function buttonClickHandler(event) {
    console.log("button clicked");
    var input = translateInput.value;
    var finalURL = constructURL(input);
    console.log(finalURL)
    fetch(finalURL)
    .then(response => response.json())
    .then(json => {
        translateOutput.innerText = json.contents.translated;
    })
    .catch(errorHandler)
}
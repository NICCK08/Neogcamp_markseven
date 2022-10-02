var btnTranslate =document.querySelector("#btn-translate");
var txtInput = document.querySelector(".txt-input");
var outputDiv = document.querySelector(".output-div");


var serverURL ="https://api.funtranslations.com/translate/groot.json"

function getTranslationURL(text){
    return serverURL + "?" +"text=" +text
}

function errorHandler(error) {
    console.log("error occured", error)
    alert("something wrong with server");
}

function clickHandler(){

    var inputText = txtInput.value; //taking input
    console.log(inputText, "inputText");
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated
            outputDiv.innerText = translatedText; //output
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);
var inputData= document.querySelector("#translate-input");
var btnTranslate= document.querySelector("#btn-translate");
var outputData= document.querySelector("#translate-output");

var serverURL="https://api.funtranslations.com/translate/dothraki.json";

function getUpdatedURL(value) {
    return `${serverURL}?text=${value}`;
}

btnTranslate.addEventListener("click", buttonClickHandler);

function buttonClickHandler(){
    console.log("Button Clicked");
    var input= inputData.value;
    console.log
    fetch(getUpdatedURL(input))
    .then(response=>response.json())
    .then(json=>outputData.innerText=json.contents.translated)
    .catch(()=> alert("ERROR!!"))
}

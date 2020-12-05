var inputtext=document.querySelector("#inputtxt");
var translatebtn=document.querySelector("#inputbtn");
var outputtext=document.querySelector("outputtxt");

var input=inputtext.value;

var urlforwakanda="https://api.funtranslations.com/translate/sith.json";
translatebtn.addEventListener("click",function clickme(){
    outputtext.innerText=input;
});
// function translateurl(text){
//     return urlforwakanda +"?text="+text;
// }
// console.log(outputtext);
// function clickme(){
//     var input=inputtext.value;

//    fetch(translateurl(input))
//    .then(resp =>resp.json())
//    .then(json =>{
//        var translatetxt=json.contents.translated;
//        outputtext.innerText=translatetxt; })
// };

// translatebtn.addEventListener("click",clickme);

// translatebtn.addEventListener("click",translate);
// function translate(){
//      fetch(urlforwakanda+"?text="+input).then(resp=>resp.json()).then(sith=>console.log(sith));
// }
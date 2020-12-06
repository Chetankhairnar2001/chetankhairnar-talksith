var inputtext=document.querySelector("#inputtxt");
var translatebtn=document.querySelector("#inputbtn");
var outputtext=document.querySelector("#outputtxt");

var urlforsith="https://api.funtranslations.com/translate/sith.json";

function translateurl(text){
    return urlforsith +"?text="+text;
}

function clickme(){
    var input=inputtext.value;

   fetch(translateurl(input))
   .then(resp =>resp.json())
   .then(json =>{
       var translatetxt=json.contents.translated;
       outputtext.innerText=translatetxt; })
};

translatebtn.addEventListener("click",clickme);


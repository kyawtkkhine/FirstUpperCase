var btn    = document.querySelector("#btn");
var result = document.querySelector("p");

btn.addEventListener("click", resultSet);
var words;
var aa;
var real;
function resultSet(){
    var character    = document.querySelector("#str").value;
     words = character.split(" ");
    for (let i = 0; i < words.length; i++){
              aa = words[i].charAt(0).toUpperCase() + words[i].slice(1,words[i].length);
             console.log(aa);
             result.innerText += " "+aa;
            }
}



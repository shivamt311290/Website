var str1 = '';

$("button").click(function() {
  $("h1").css("color", "red");
  setTimeout(action, 100);
})
function action(){
  $("h1").css("color", "black");
}



$("input").keypress(function(ev){
    var str = concat(ev.key);
    document.querySelector("h1").innerHTML = str; })

function concat(val){
str1 = str1 + val;
    return str1;
}

$("h1").before("<button>New</button>");

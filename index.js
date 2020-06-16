var numberOfdrums = document.querySelectorAll("button").length;
for (var i = 0; i < numberOfdrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("keypress", function(evet){
    buttonAnimation(event.key);
    if (event.key == "w") {
      var audio = new Audio('sounds/crash.mp3');
          audio.play();
    }else if (event.key == "a") {
      var audio = new Audio('sounds/snare.mp3');
          audio.play();
    }else if (event.key == "s") {
      var audio = new Audio('sounds/tom-1.mp3');
          audio.play();
    }else if (event.key == "d") {
      var audio = new Audio('sounds/tom-2.mp3');
          audio.play();
    }else if (event.key == "j") {
      var audio = new Audio('sounds/tom-3.mp3');
          audio.play();
    }else if (event.key == "k") {
      var audio = new Audio('sounds/tom-4.mp3');
          audio.play();
    }
  })
}

function buttonAnimation(currentKey){
  var activeButton  = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100)
}


/*var audio = new Audio('sounds/snare.mp3');
audio.play();*/

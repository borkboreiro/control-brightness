rangeInput = document.getElementById('range');
container = document.getElementsByClassName('container')[0];

rangeInput.addEventListener("change",function(){
  container.style.filter = "brightness(" + rangeInput.value + "%)";
});
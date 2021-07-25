//array with colors
let colors = ['yellow', 'red', 'green', 'blue', 'black', 'orange', 'pink'];
//get the button id
let button = document.getElementById('button');
// add event 
button.addEventListener('click', function(){
//chose colors randomly
     let randomlyColor = colors[Math.floor(Math.random()*colors.length)]
     let container = document.getElementById('container');
    container.style.background = randomlyColor;
});
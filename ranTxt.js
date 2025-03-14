let usInput = prompt("Input number! :)");

while(isNaN(usInput) ||  usInput === "" || usInput === null){
  usInput = prompt("I think i said to input Number >:|");
};

usInput=Math.abs(usInput);

usInput=Math.round((Math.random()*usInput)+1);

console.log(usInput);

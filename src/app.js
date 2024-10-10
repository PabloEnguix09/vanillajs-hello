let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

window.onload = function() {
  //write your code here

  const getRandomNumber = (maxNumber) => {
    return Math.floor(Math.random()*maxNumber);
  };

  let excuseElement = document.getElementById("excuse");
  let excuse = who[getRandomNumber(who.length)] + " " + action[getRandomNumber(action.length)] + " " + what[getRandomNumber(what.length)] + " " + when[getRandomNumber(when.length)];

  document.getElementById("excuse").innerHTML = excuse;
};

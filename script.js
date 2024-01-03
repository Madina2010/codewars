function multiply(a, b){
    return a * b
}

console.log(multiply(3,4));
// ///////////////////////////////////////
function greet(name) {
    if (name === "Johnny") {
      return "Hello, my love!";
    } else {
      return "Hello, " + name + "!";
    }
  }

console.log(greet('Johnny'));
// ///////////////////////////////////////
function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'; break
      case 2:
        name = 'Venus'; break
      case 3:
        name = 'Earth'; break
      case 4:
        name = 'Mars'; break
      case 5:
        name = 'Jupiter'; break
      case 6:
        name = 'Saturn'; break
      case 7:
        name = 'Uranus'; break
      case 8:
        name = 'Neptune'; break
    }
    
    return name;
  }
// ///////////////////////////////////////
function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
  }
// ///////////////////////////////////////
function checkAlive (health) {
    if (health > 0) {
      return true
    } else {
      return false
    }
  }
// ///////////////////////////////////////
var a = "code";
var b = "wa.rs";
var name = a + b;
// ///////////////////////////////////////
function capitalizeWord(word) {
    word = word[0].toUpperCase() + word.slice(1);
    return word;
  }
// ///////////////////////////////////////
function correctTail(bod, tail) {
  
    sub = bod.substr(bod.length - (tail.length))
    
    if (sub = tail) {
      return true
    }
    else {
      return false
    }
  }
// ///////////////////////////////////////
function howManyDalmatians(number) {
    var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIONS!!!"];
    
    var respond = number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number === 101 ? dogs[3] : dogs[2]));
  
    return respond;
  }
// ///////////////////////////////////////
function weatherInfo(temp) {
    var c = convertToCelsius(temp);
    if (c > 0) {
      return c + " is above freezing temperature";
    } else {
      return c + " is freezing temperature";
    }
  }
  
  function convertToCelsius(temperature) {
    var celsius = (temperature - 32) * (5 / 9);
    return celsius;
  }
  
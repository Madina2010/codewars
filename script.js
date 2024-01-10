function getMax1()
{
  var max = {name: 'Max Headroom'}
  
  return max;
}

function getMax2()
{
  var max = {name: 'Max Headroom'}
  return max;
}
// /////////////////////////////////////////////////////////
function buildString(...template) {
    return `I like ${template.join(', ')}!`;
  }
//   ///////////////////////////////////////////////////////
function howManyDalmatians(number) {
    var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    
    var respond = number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number === 101 ? dogs[3] : dogs[2]));
  
    return respond;
  }
//   ////////////////////////////////////////////////////////
var calculate = function(a, o, b) {
    var result = 0;
  
    if (o === "+") {
      return a + b;
    } else if (o === "-") {
      return a - b;
    } else if (o === "/" && b !== 0) {
      return a / b;
    } else if (o === "*") {
      return a * b;
    } else {
      return null
    }
  
    return result;
  };
function positiveSum(arr) {
    var sum = 0;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
        sum += arr[i];
      }
    }
    return sum
  }

//   ////////////////////////////////////////////////////////////////////////////////////////
function evenOrOdd(number) {
    if (number % 2 === 0) {
      return "Even"
    } else {
      return "Odd"
    }
  }
//   ////////////////////////////////////////////////////////////////////////////////////////
function validate(username, password){
    var database = new Database();
    if (username.includes('||') || password.includes('||') || username.includes('//') || password.includes('//')) {
      return "Wrong username or password!";
    }
    return database.login(username, password);
  }
//   ////////////////////////////////////////////////////////////////////////////////////////
function Warrior(n){
    var name = n;  
    this.name = function(n){
      if( n ) name=n;
      return name;
    }
  }
    
  Warrior.prototype.toString = function(){
      return "Hi! my name's " + this.name();
  }
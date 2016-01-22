
// Determines whether a number is ping, pong, pingpong, or none of the above and returns that result, as well as whether or not the number is prime.
var pingPong = function(loopedNumber) {
  if (loopedNumber % 15 === 0) {
    return "pingpong";
  } else if (loopedNumber === 5){
    return "pong - prime";
  } else if (loopedNumber === 3) {
    return "ping - prime";
  } else if (loopedNumber % 5 === 0){
    return "pong";
  } else if (loopedNumber % 3 === 0) {
    return "ping";
  } else if (primes(loopedNumber)){
  return loopedNumber + " - prime";
  } else {
    return loopedNumber;
  }
};

// Runs the pingPong function on all numbers from 1 to the input number and collects those results into an array.
var pingPongLoop = function(number) {
  var resultArray = [];
  if (number < 0) {
    for (var index = -1; index >= number; index -= 1) {
      resultArray.push(pingPong(index));
    }
  } else {
    for (var index = 1; index <= number; index += 1) {
      resultArray.push(pingPong(index));
    }
  }
  return resultArray;
};

// runs a number through the sieve and checks if it's inside the resulting array to evaluate whether or not it's prime.
var primes = function(number) {
  if (contains(sieve(number), number)) {
    return true;
  } else {
    return false;
  }
};

// checks to see if the second input is an element inside the first.
var contains = function(array, number) {
  for (var index = 0; index < array.length; index += 1) {
    if (array[index] === number) {
      return true;
    }
  }
  return false;
}

// returns an array of all prime numbers up to an input number by filling the array with all numbers between 2 and the number, then removing factors.
var sieve = function(number) {
  var allNumbers = []
  for (var i = 2; i <= number; i +=1) {
    allNumbers.push(i);
  }
  allNumbers.forEach(function(prime) {
    allNumbers.forEach(function(remove) {
      if (remove % prime === 0 && remove !== prime) {
        var index = allNumbers.indexOf(remove);
        if (index > -1) {
          allNumbers.splice(index, 1);
        } else {}
      } else {}
    });
  });
  return allNumbers;
}
// Front end code. Gets the user input and runs that number through pingPongLoop, printing each item in the resulting array as a list item.
$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    $(".list-result").remove();
    var number = parseInt($("input#number").val());
    pingPongLoop(number).forEach(function(result) {
      $("ul#result-list").append("<li class='list-result'>" + result + "</li>");
    });
    event.preventDefault();
  });
});

var pingPong = function(loopedNumber) {
  if (loopedNumber % 15 === 0) {
    return "pingpong";
  } else if (loopedNumber % 5 === 0){
    return "pong";
  } else if (loopedNumber % 3 === 0) {
    return "ping";
  } else {
  return loopedNumber;
  }
};

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

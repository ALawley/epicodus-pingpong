var pingPong = function(number) {
  if (number % 5 === 0){
    return "pong";
  } else if (number % 3 === 0) {
    return "ping";
  } else {
  return number;
  }
};

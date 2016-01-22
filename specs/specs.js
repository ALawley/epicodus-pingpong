describe ('pingPong', function () {
  it("will return the input number", function () {
    expect(pingPong(8)).to.equal(8);
  });
  it("will return 'ping' instead if the input number is evenly divisble by 3", function () {
    expect(pingPong(9)).to.equal("ping");
  });
  it("will return 'pong' instead if the input number is evenly divisble by 5", function () {
    expect(pingPong(10)).to.equal("pong");
  });
  it("will return 'pingpong' instead if the input number is evenly divisble by 3 and 5", function () {
    expect(pingPong(15)).to.equal("pingpong");
  });
  it("will return 'number - prime' for prime numbers", function () {
    expect(pingPong(7)).to.equal("7 - prime");
  });
  it("will return 'ping - prime' instead for 3", function () {
    expect(pingPong(3)).to.equal("ping - prime");
  });
  it("will return 'pong - prime' instead for 5", function () {
    expect(pingPong(5)).to.equal("pong - prime");
  });
});

describe ('pingPongLoop', function() {
  it("will aggregate into an array all pingPong results from 1 to the input number", function() {
    expect(pingPongLoop(15)).to.eql([1, "2 - prime", "ping - prime", 4, "pong - prime", "ping", "7 - prime", 8, "ping", "pong", "11 - prime", "ping", "13 - prime", 14, "pingpong"]);
  });
  it("will handle negative numbers appropraitely", function() {
    expect(pingPongLoop( -15)).to.eql([-1, -2, "ping", -4, "pong", "ping", -7, -8, "ping", "pong", -11, "ping", -13, -14, "pingpong"]);
  });
});

describe ('primes', function() {
  it("will return false if number is not prime", function () {
    expect(primes(22)).to.equal(false);
  });
  it("will return true if number is prime", function () {
    expect(primes(23)).to.equal(true);
  });
});


describe ('contains', function() {
  it("will return false if array does not contain the input", function () {
    expect(contains([1, 2, 3, 4], 5)).to.equal(false);
  });
  it("will return true if array does not contain the input", function () {
    expect(contains([2, 3, 5, 7, 11, 13, 17, 19, 23], 23)).to.equal(true);
  });
})

describe ('sieve', function() {
  it("will give array of all primes up to input number", function () {
    expect(sieve(23)).to.eql([2, 3, 5, 7, 11, 13, 17, 19, 23]);
  });
});

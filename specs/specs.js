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
});

describe ('pingPongLoop', function() {
  it("will aggregate into an array all pingPong results from 1 to the input number", function() {
    expect(pingPongLoop(15)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "pingpong"]);
  });
  it("will handle negative numbers appropraitely", function() {
    expect(pingPongLoop( -15)).to.eql([-1, -2, "ping", -4, "pong", "ping", -7, -8, "ping", "pong", -11, "ping", -13, -14, "pingpong"]);
  });
});

describe ('primes', function() {
  it("will return false if number is not prime", function () {
    expect(prime(22)).to.eql(false);
  });
});

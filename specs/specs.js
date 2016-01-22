describe ('pingPong', function () {
  it("will return the input number", function () {
    expect(pingPong(8)).to.equal(8);
  });
  it("will return 'ping' if the input number is evenly divisble by 3", function () {
    expect(pingPong(9)).to.equal("ping");
  });
  it("will return 'pong' if the input number is evenly divisble by 5", function () {
    expect(pingPong(10)).to.equal("pong");
  });
  it("will return 'pingpong' if the input number is evenly divisble by 3 and 5", function () {
    expect(pingPong(15)).to.equal("pingpong");
  });
});

describe ('pingPongLoop', function() {
  it("will aggregate into an array all pingPong results from 1 to the input number", function() {
    expect(pingPongLoop(15)).to.eql([1, 2, "ping", 4, "pong", "ping", 7, 8, "ping", "pong", 11, "ping", 13, 14, "pingpong"])
  });
});

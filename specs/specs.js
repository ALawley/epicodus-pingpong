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

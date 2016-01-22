describe ('pingPong', function () {
  it("will return the input number", function () {
    expect(pingPong(8)).to.equal(8);
  });
  it("will return 'ping' if the input number is evenly divisble by 3", function () {
    expect(pingPong(9)).to.equal("ping");
  });
});

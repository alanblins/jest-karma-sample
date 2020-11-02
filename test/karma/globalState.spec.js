describe("getGlobalValue test", function() {
  it("result is 10", function() {
    expect(getGlobalValue()).toBe(10);
  });
  it("result is 5", function() {
    expect(getGlobalValue2()).toBe(5);
  });
});

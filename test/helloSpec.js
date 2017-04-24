describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });

  it("blah...", function() {

    expect(2).toBe(2);
  })
});

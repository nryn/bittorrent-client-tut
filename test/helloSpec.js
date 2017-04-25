describe("A suite is just a function", () => {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });

  it("blah...", () => {

    expect(2).toBe(2);
  })
});

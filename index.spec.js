const ChainableStub = require("..").proxy;

describe("ChainableStub", () => {
  let b3;
  beforeEach(() => {
    b3 = ChainableStub;
    b3.select("#id-someId").select(".image").text("change text to this");
  });

  it("logs the name of the calls in order", () => {
    expect(b3._calls).toEqual(["select", "select", "text"]);
  });

  it("creates a spy for each function call", () => {
    expect(Object.keys(b3._spies)).toEqual(["select", "text"]);
  });
});

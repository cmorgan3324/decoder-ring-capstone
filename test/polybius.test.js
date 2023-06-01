const { polybius } = require("../src/polybius");
const { expect } = require("chai");

describe("polybius()", () => {
  it("should translate the letters i and j to 42 when encoding", () => {
    expect(polybius("i")).to.equal("42");
    expect(polybius("j")).to.equal("42");
  });

  it("should translate the number 42 to (i/j) when decoding", () => {
    const actual = polybius("42", (encode = false));
    expect(actual).to.include("i");
    expect(actual).to.include("j");
  });

  it("ignores capital letters", () => {
    expect(polybius("Hello World")).to.equal("3251131343 2543241341");
  });

  it("maintains spaces in message", () => {
    expect(polybius("Hello World")).to.equal("3251131343 2543241341");
  });
});

// Write your tests here!
const { caesar } = require("../src/caesar");
const { expect } = require("chai");

describe("caesar()", () => {
  const expected = false;

  it("should return false if shift value equals 0", () => {
    expect(caesar("thinkful", 0)).to.equal(expected);
  });

  it("should return false if shift value is less than -25", () => {
    expect(caesar("thinkful", -26)).to.equal(expected);
  });

  it("should return false if shift value is greater than 25", () => {
    expect(caesar("thinkful", 26)).to.equal(expected);
  });

  it("should return false if shift value is undefined", () => {
    expect(caesar("thinkful")).to.equal(expected);
  });

  it("should ignore capital letters", () => {
    expect(caesar("This is A Secret Message!", 8)).to.equal(
      "bpqa qa i amkzmb umaaiom!"
    );
  });

  it("should wrap shifts around to the front of the alphabet", () => {
    expect(caesar("crazy", 4)).to.equal("gvedc");
  });

  it("should maintain spaces and nonalphabetic symbols in the message", () => {
    expect(caesar("This is A Secret Message!", 8)).to.equal(
      "bpqa qa i amkzmb umaaiom!"
    );
  });
});

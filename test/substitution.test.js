
const { substitution } = require("../src/substitution");
const { expect } = require("chai");

describe("substitution()", () => {
  const expected = false;
  it("returns false if given alphabet isn't exactly 26 characters long", () => {
    expect(substitution("thinkful", "xoyqmcgrukswaflnthdjp")).to.equal(
      expected
    );
  });

  it("returns false if substitution alphabet is missing", () => {
    expect(substitution("thinkful")).to.equal(expected);
  });

  it("returns false if any duplicate letters in given alphabet", () => {
    expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpwfcve")).to.equal(
      expected
    );
  });

  it("should correctly translate given phrase based on given alphabet", () => {
    expect(
      substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
    ).to.equal("thinkful");
  });

  it("maintain spaces in message", () => {
    expect(
      substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
    ).to.equal("elp xhm xf mbymwwmfj dne");
  });

  it("ignores capital letters", () => {
    expect(
      substitution("You Are An Excellent Spy", "xoyqmcgrukswaflnthdjpzibev")
    ).to.equal("elp xhm xf mbymwwmfj dne");
  });
});

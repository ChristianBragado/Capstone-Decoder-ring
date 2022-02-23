const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() submission tests written by student", () => {
  describe("error handling", () => {
    it("should return false if the shift amount is 0", () => {
      const message = "Terra is awesome";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is above 25", () => {
      const message = "Terra is awesome";
      const shift = 26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is less than -25", () => {
      const message = "Terra is awesome";
      const shift = -26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by shifting the letters", () => {
      const message = "thankful for thinkful";
      const shift = 6;
      const actual = caesar(message, shift);
      const expected = "zngtqlar lux znotqlar";

      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
      const message = "i want to be a programmer.";
      const shift = 6;
      const actual = caesar(message, shift);
      const expected = "o cgtz zu hk g vxumxgsskx.";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "hello world";
      const shift = 6;
      const actual = caesar(message, shift);
      const expected = "nkrru cuxrj";

      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      const message = "zebra magazine";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "cheud pdjdclqh";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const message = "zebra magazine";
      const shift = -3;
      const actual = caesar(message, shift);
      const expected = "wbyox jxdxwfkb";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
      const message = "phvvdjh";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "message";

      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
      const message = "d phvvdjh.";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "a message.";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "D pHvvdjh";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "a message";

      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      const message = "cheud pdjdclqh";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "zebra magazine";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const message = "wbyox jxdxwfkb";
      const shift = -3;
      const actual = caesar(message, shift, false);
      const expected = "zebra magazine";

      expect(actual).to.equal(expected);
    });
  });
});

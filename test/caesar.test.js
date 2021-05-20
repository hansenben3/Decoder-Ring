const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("Caesar Test:", () => {
    //4
    it("should return the shifted/encoded letters", () => {

        const expected = "ehqmdplq";
        const actual = caesar.caesar("benjamin", 3)
        expect(actual).to.equal(expected);
    });
    //1
    it("should return false if the shift amount is 0", () => {
      
      const expected = false;
      const actual = caesar.caesar("whatever",0)
      expect(actual).to.eql(expected);
      
    });
    //3
    it("should return false if the shift amount is less then -25", () => {
      
      const expected = false;
      const actual = caesar.caesar("whatever",-26)
      expect(actual).to.eql(expected);
      
    });
    //2
    it("should return false if the shift amount is greater then 25", () => {
      
      const expected = false;
      const actual = caesar.caesar("whatever",26)
      expect(actual).to.eql(expected);
      
    });
    //8
    it("should return each letter in an array with a negative shift", () => {

        const expected = "ybkgxjfk";
        const actual = caesar.caesar("benjamin", -3)
        expect(actual).to.equal(expected);
    });
    //6
    it("should ignore capital letters", () => {

        const expected = "ybkgxjfk";
        const actual = caesar.caesar("BEnjamin", -3)
        expect(actual).to.equal(expected);
    });
    //5
    it("should leave spaces and other symbols as is", () => {

        const expected = "ybk gxj fk.";
        const actual = caesar.caesar("ben jam in.", -3)
        expect(actual).to.equal(expected);
    });
    //7
    it("should handle letters at the end of the alphabet", () => {

        const expected = "cdqtumtsj";
        const actual = caesar.caesar("xylophone", 5)
        expect(actual).to.equal(expected);
    });

});

describe("Caesar Test 2:", () => {
    //1
    it("should decode a message by shifting the letters the opposite direction", () => {

        const expected = "benjamin";
        const actual = caesar.caesar("ehqmdplq", 3, false)
        expect(actual).to.equal(expected);
    });
    //2
    it("should leave spaces and other symbols as is", () => {

        const expected = "ben jam in.";
        const actual = caesar.caesar("ehq mdp lq.", 3, false)
        expect(actual).to.equal(expected);
    });
    //3
    it("should ignore capital letters", () => {

        const expected = "benjamin";
        const actual = caesar.caesar("EHqMdplq", 3, false)
        expect(actual).to.equal(expected);
    });
    //4
    it("should handle letters at the end of the alphabet", () => {

        const expected = "xylophone";
        const actual = caesar.caesar("cdqtumtsj", 5, false)
        expect(actual).to.equal(expected);
    });
    //5
    it("should allow for a negative shift the shifts to the left", () => {

        const expected = "benjamin";
        const actual = caesar.caesar("ybkgxjfk", -3, false)
        expect(actual).to.equal(expected);
    });
  
});

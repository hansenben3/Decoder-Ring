const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("Polybius Test 1 :", () => {
  
  it("should return the encoded letters",  () => {
    
    const expected = "1121314151122232424252132333435314243444541525354555";
    const actual = polybius.polybius("abcdefghijklmnopqrstuvwxyz");
    expect(actual).to.equal(expected);
    
  });
  
  it("should encode both 'i' and 'j' as 42", () => {
    
    const expected = "424222221351";
    const actual = polybius.polybius("jiggle");
    expect(actual).to.equal(expected);
    
  });
  
  it("should leave spaces as is", () => {
    
    const expected = "4242 2222 1351";
    const actual = polybius.polybius("ji gg le");
    expect(actual).to.equal(expected);
    
  });
  
});

describe("Polybius Test 2 :", () => {
  
  it("should decode the message by each pair of numbers", () => {
    
    const expected = "message";
    const actual = polybius.polybius("23513434112251", false);
    expect(actual).to.equal(expected);
    
  });
  
  it("should translate 42 to both 'i' and 'j'", () => {
    
    const expected = "i/ji/jggle";
    const actual = polybius.polybius("424222221351", false);
    expect(actual).to.equal(expected);
    
  });

  it("should leave spaces as is", () => {
    
    const expected = "me ssage";
    const actual = polybius.polybius("2351 3434112251", false);
    expect(actual).to.equal(expected);
    
  });

  it("should return false if the length of all numbers is odd", () => {
    
    const expected = false;
    const actual = polybius.polybius("235134341122511", false);
    expect(actual).to.equal(expected);
    
  });
  
});



const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe ("Substitution Test 1 : ", () => {
  
  it("should return false if alphabet is missing", () => {
    
    const expected = false;
    const actual = substitution.substitution("asdadas")
    expect(actual).to.equal(expected);
    
   });
  
   it("should return false if the alphabet is not exactly 26 characters", () => {
    
    const expected = false;
    const actual = substitution.substitution("asdadas","asdadgadgs")
    expect(actual).to.equal(expected);
    
   });
  
   it("should return false if the alphabet does not contain unique characters", () => {
    
    const expected = false;
    const actual = substitution.substitution("asdadas","abcdeeefgtrgrgrgththhtjyjk")
    expect(actual).to.equal(expected);
    
   });
  
   it("should encode a message by using the given alphabet", () => {
    
    const expected = "lkg";
    const actual = substitution.substitution("ben","plmoknijbuhvygctfxrdzeswaq")
    expect(actual).to.equal(expected);
    
   });
  
   it("should work with any kind of key with unique characters", () => {
    
    const expected = ".kg";
    const actual = substitution.substitution("ben","p.moknijbuhvygctfxrdzeswaq")
    expect(actual).to.equal(expected);
    
   });
  
   it("should preserve spaces", () => {
    
    const expected = "l k g";
    const actual = substitution.substitution("b e n","plmoknijbuhvygctfxrdzeswaq")
    expect(actual).to.equal(expected);
     
   });    
}); // end of describe 1
  
describe ("Substitution Test 2 : ", () => {
    
  it("should decode a message by using the given alphabet", () => {
    
    const expected = "ben";
    const actual = substitution.substitution("lkg","plmoknijbuhvygctfxrdzeswaq", false)
    expect(actual).to.equal(expected);
    
  });
    
  it("should work with any kkind of key with unique characters", () => {
    
    const expected = "ben";
    const actual = substitution.substitution(".kg","p.moknijbuhvygctfxrdzeswaq", false)
    expect(actual).to.equal(expected);
  
  });  
  
  it("should preserve spaces", () => {
    
    const expected = "b e n";
    const actual = substitution.substitution("l k g","plmoknijbuhvygctfxrdzeswaq", false)
    expect(actual).to.equal(expected);
  
  });
  
});// end of describe 2




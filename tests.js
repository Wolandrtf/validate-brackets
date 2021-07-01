const {validateBrackets} = require('./index');
const assert = require('assert');

describe('Validate brackets', function() {
    it('should return correct value, for test case #1', function() {
      assert.equal(validateBrackets('(((((()))())))))'), false)
    });
  
  it('should return correct value, for test case #2', function() {
    assert.equal(validateBrackets('((()()))'), true);
  });
  
  it('should return correct value, for test case #3', function() {
    assert.equal(validateBrackets('))(('), false);
  });
  
  it('should return correct value, for test case #4', function() {
    assert.equal(validateBrackets('()'), true);
  });
  
  it('should return correct value, for test case #5', function() {
    assert.equal(validateBrackets(')))((()))((('), false);
  });
});

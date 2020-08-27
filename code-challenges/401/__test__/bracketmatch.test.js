'use strict';

let multiBracketValidation = require('../multiBracketValidation/multi-bracket-validation.js');

describe('Bracket Match Validation', () => {

  it('recognizes the exported function', () => {
    expect(multiBracketValidation).toBeDefined();
  });

  it('returns false if there is no input or if the input is not a string', () => {
    let noInput = multiBracketValidation();
    let emptyStr = multiBracketValidation('');
    let wrongType = multiBracketValidation(2);
    expect(noInput).toBeFalsy();
    expect(emptyStr).toBeFalsy();
    expect(wrongType).toBeFalsy();
  });

  it('returns false if the first value in the string is a closing bracket', () => {
    let closingFirst = multiBracketValidation(')[])');
    expect(closingFirst).toBeFalsy();
  });

  it('returns false if brackets are imbalanced', () => {
    let imb1 = multiBracketValidation('[({}]');
    let imb2 = multiBracketValidation('(](');
    let imb3 = multiBracketValidation('{(}abc)');
    expect(imb1).toBeFalsy();
    expect(imb2).toBeFalsy();
    expect(imb3).toBeFalsy();
  });

  it('returns true if brackets are balanced', () => {
    let bal1 = multiBracketValidation('{}');
    let bal2 = multiBracketValidation('{}(){}');
    let bal3 = multiBracketValidation('()[[abcd]]');
    let bal4 = multiBracketValidation('{}{hello}[](there())');
    let imb4 = multiBracketValidation('}}{{');
    expect(bal1).toBeTruthy();
    expect(bal2).toBeTruthy();
    expect(bal3).toBeTruthy();
    expect(bal4).toBeTruthy();
    expect(imb4).toBeFalsy();
  });

});

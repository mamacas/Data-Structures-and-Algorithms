'use strict';

const checkRepeats = require('../repeatedWord/repeated-word.js');

describe('Repeated Words', () => {

  it('should remove special characters from a string', () => {
    let string = 'letting you. know. 2 that/ + this, is a string with no punctuation! one! solid way_ to + check & a string.';

    let newSTR = string.replace(/[\d./,!\-_&+]/g, '');

    checkRepeats(string);

    expect(newSTR).toEqual('letting you know  that  this is a string with no punctuation one solid way to  check  a string');
  });


  it('should remove extra spaces from a modified string', () => {
    let string = 'letting you know  that  this is a string with no punctuation one solid way to  check  a string';

    let nospaceSTR = string.replace(/\s{2,}/g, ' ');

    checkRepeats(string);

    expect(nospaceSTR).toEqual('letting you know that this is a string with no punctuation one solid way to check a string');
  });


  it('should convert the final string to all lowercase letters', () => {
    let string = 'Letting YOU know that this is a STRING with NO punctuation one SOLID way to check a string';

    let finalSTR = string.toLowerCase();

    checkRepeats(string);

    expect(finalSTR).toEqual('letting you know that this is a string with no punctuation one solid way to check a string');
  });

  it('should return the first repeated word if there are repeated words', () => {
    let string1 = 'Once upon a time, there was a brave princess who...';
    let result1 = checkRepeats(string1);
    expect(result1).toBe('a');

    let string2 = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
    let result2 = checkRepeats(string2);
    expect(result2).toBe('it');

    let string3 = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
    let result3 = checkRepeats(string3);
    expect(result3).toBe('summer');

    let string4 = 'Summer\'s summer was over but it wasn\'t summer\'s end.';
    let result4 = checkRepeats(string4);
    expect(result4).toBe('summer\'s');
  });

  it('should indicate whether there are no repeat values in the string', () => {
    let string = 'In this example, there are actually no repeated words! Crazy, right? But it is true.';
    let result = checkRepeats(string);
    expect(result).toBe('No repeated words in this string');
  });

});


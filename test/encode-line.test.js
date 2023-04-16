const { assert } = require('chai');
const { testOptional } = require('../extensions/index.js');
const { encodeLine } = require('../src/encode-line.js');

it.optional = testOptional;

Object.freeze(assert);

describe('Encode line', () => {
  it.optional('should return encoding version of string', () => {
    assert.strictEqual(encodeLine('aaaatttt'), '4a4t');
    assert.strictEqual(encodeLine('aabbccc'), '2a2b3c');
    assert.strictEqual(encodeLine('abbcca'), '2a2b2c');
    assert.strictEqual(encodeLine('xyz'), '1x1y1z');
    assert.strictEqual(encodeLine(''), '');
  });
});

const hello = require('../src/hello')
const chai = require('chai');
const expect = chai.expect;

describe('hello function', () => {
  it('should return correct value', () => {
    expect(hello('Romain')).to.be.equals('Bonjour Romain');
  });
});

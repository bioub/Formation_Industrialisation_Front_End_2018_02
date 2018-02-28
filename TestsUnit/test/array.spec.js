const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;

describe('array', () => {
  describe('forEach method', () => {
    let array;

    beforeEach(() => {
      array = [1, 2, 3];
    })

    it('should call callback thrice', () => {
      const spy = sinon.spy();

      array.forEach(spy);

      expect(spy.getCall(0).args[0]).to.be.equal(1);
      expect(spy.getCall(1).args[0]).to.be.equal(2);
      expect(spy.getCall(2).args[0]).to.be.equal(3);
      expect(spy.callCount).to.be.equal(3);
    });
  });
});

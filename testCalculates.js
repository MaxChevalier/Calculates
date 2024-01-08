const chai = require('chai');
const { expect } = chai;
const calculates = require('./calculates');

describe('Calculates', () => {
  describe('add', () => {
    it('should add two numbers correctly', () => {
      const result = calculates.add(5, 10);
      expect(result).to.equal(15);
    });
  });

  describe('subtract', () => {
    it('should subtract two numbers correctly', () => {
      const result = calculates.subtract(10, 5);
      expect(result).to.equal(5);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers correctly', () => {
      const result = calculates.multiply(5, 10);
      expect(result).to.equal(50);
    });
  });

  describe('divide', () => {
    it('should divide two numbers correctly', () => {
      const result = calculates.divide(10, 2);
      expect(result).to.equal(5);
    });

    it('should handle division by zero', () => {
      const result = calculates.divide(10, 0);
      expect(result).to.equal('Cannot divide by zero');
    });
  });
});

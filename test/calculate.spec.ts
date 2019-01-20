import { Calculate } from '../dist';
import { expect } from 'chai';

const calculate = new Calculate();

describe('plus function test', () => {
  it('1 + 1 should return 2', () => {
    expect(calculate.plus(1, 1)).to.equal(2);
  });
});

describe('minus function test', () => {
  it('2 - 1 should return 1', () => {
    expect(calculate.minus(2, 1)).to.equal(1);
  });
});

describe('times function test', () => {
  it('2 * 3 should return 6', () => {
    expect(calculate.times(2, 3)).to.equal(6);
  });
});

describe('divide function test', () => {
  it('4 / 2 should return 2', () => {
    expect(calculate.divide(4, 2)).to.equal(2);
  });
});

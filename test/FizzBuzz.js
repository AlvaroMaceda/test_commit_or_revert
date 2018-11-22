const {expect} = require('chai');
const fizzbuzz = require('../fizzbuzz');

describe('it', () => {
  it('works', () => {
    expect(true).to.eq(true)
  })
  it('requires', () =>  {
    expect(fizzbuzz(1)).to.eq('1');
  })
})

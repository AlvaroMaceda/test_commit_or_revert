const {expect} = require('chai');
const fizzbuzz = require('../fizzbuzz');

describe('it', () => {
  it('works', () => {
    expect(true).to.eq(true)
  })
  it('returns 1 when 1', () =>  {
    expect(fizzbuzz(1)).to.eq('1');
  })
  it('returns 78 when 78', () => {
    expect(fizzbuzz(78)).to.eq('78');
  })
})

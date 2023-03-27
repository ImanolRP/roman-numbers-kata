import { RomanNumber } from '../src/RomanNumber'

describe('roman-number-kata', () => {
  it('should return I when 1 given', () => {
    const romanNumber = new RomanNumber()

    expect(romanNumber.convert(1)).toBe('I')
  })
})

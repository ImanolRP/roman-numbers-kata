import { RomanNumber } from '../src/RomanNumber'

describe('roman-number-kata', () => {
  it.each`
    given | expected
    ${1}  | ${'I'}
    ${2}  | ${'II'}
    ${3}  | ${'III'} 
    ${4}  | ${'IV'} 
    ${5}  | ${'V'} 
  `('should return "$expected" when "$given" given', ({ given, expected }) => {
    const romanNumber = new RomanNumber()

    expect(romanNumber.convert(given)).toBe(expected)
  })
})

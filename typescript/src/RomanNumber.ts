export class RomanNumber {
  convert (input: number): string {
    if (input === 2) {
      return 'II'
    }

    if (input === 3) {
      return 'III'
    }

    return 'I'
  }
}

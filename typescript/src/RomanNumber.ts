export class RomanNumber {
  convert (input: number): string {
    if (input === 4) {
      return 'IV'
    }

    let response = ''

    for (let iterator = 0; iterator < input; iterator++) {
      response += 'I'
    }

    return response
  }
}

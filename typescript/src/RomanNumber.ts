export class RomanNumber {
  convert (input: number): string {
    let response = ''
    for (let iterator = 0; iterator < input; iterator++) {
      response += 'I'
    }
    return response
  }
}

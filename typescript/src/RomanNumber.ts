export class RomanNumber {
  private static readonly equivalenceMap: Map<number, string> = new Map([
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ])

  convert (input: number): string {
    let rest = input
    let response = ''

    while (rest > 0) {
      RomanNumber.equivalenceMap.forEach((roman, arabic) => {
        if (rest >= arabic) {
          rest -= arabic
          response = roman + response
        }
      })
    }

    return response
  }
}

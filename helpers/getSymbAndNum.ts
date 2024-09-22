import alphabets from 'data/alphabets'
import numbers from 'data/numbers'

export const getSymbAndNum = (transfromDictionaries: any) => {
  const result: string[] = []
  alphabets.map((symbol) => {
    const filtered = transfromDictionaries.filter((f: any) =>
      f.title.toUpperCase().startsWith(symbol),
    )
    if (filtered.length) {
      result.push(symbol)
    }
    return result
  })
  for (const number of numbers) {
    const filtered = transfromDictionaries.filter((f: any) => f.title.startsWith(number))
    if (filtered.length) {
      result.push('0-9')
      break
    }
  }
  return result
}

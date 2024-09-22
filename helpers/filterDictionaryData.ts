import alphabets from 'data/alphabets'
import numbers from 'data/numbers'

export const filterDictionaryData = (transfromDictionaries: ITransformDictionaryData[]) => {
  const resultData: any = {}
  alphabets.map((symbol: string) => {
    const filtered = transfromDictionaries.filter((f: ITransformDictionaryData) =>
      f.title
        .toUpperCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036F]/g, '')
        .startsWith(symbol),
    )
    if (filtered.length) {
      filtered.sort((a: ITransformDictionaryData, b: ITransformDictionaryData) => {
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1
        } else if (b.title.toLowerCase() > a.title.toLowerCase()) {
          return -1
        } else {
          return 0
        }
      })
      resultData[symbol] = filtered
    }
    return resultData
  })
  numbers.map((number: string) => {
    const filtered = transfromDictionaries.filter((f: ITransformDictionaryData) =>
      f.title.startsWith(number),
    )
    if (filtered.length) {
      filtered.sort((a: ITransformDictionaryData, b: ITransformDictionaryData) => {
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1
        } else if (b.title.toLowerCase() > a.title.toLowerCase()) {
          return -1
        } else {
          return 0
        }
      })
      resultData['0-9'] = filtered
    }
    return resultData
  })
  return resultData
}

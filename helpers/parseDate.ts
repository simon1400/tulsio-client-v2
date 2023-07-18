export const parseDate = (date: string) => {
  const dateArr = date.split('-')
  return {
    day: +dateArr[2].split('T')[0],
    month: +dateArr[1] - 1,
    year: +dateArr[0]
  }
}
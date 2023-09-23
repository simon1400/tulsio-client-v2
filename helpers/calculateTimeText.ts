export const calculateTimeText = (content: string) => {
  const wordPerSecond = 3.33
  const wordsLength = content.split(" ").length;
  if(wordsLength > 0) {
    return Math.ceil(wordsLength / wordPerSecond)
  }
  return 0
}
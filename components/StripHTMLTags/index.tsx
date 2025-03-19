export const stripHtmlTags = (str: any) => {
  if (str) {
    // eslint-disable-next-line sonarjs/slow-regex
    return str.replace(/<.*?>/g, '')
  }
  return null
}

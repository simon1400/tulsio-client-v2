export const stripHtmlTags = (str: any) => {
  // eslint-disable-next-line sonarjs/slow-regex
  return str.replace(/<.*?>/g, '')
}
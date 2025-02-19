export const stripHtmlTags = (str: any) => {
  return str.replace(/<.*?>/g, ''); 
};
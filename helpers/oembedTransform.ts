export const oembedTransform = (htmlString: string) => {
  // Use a regular expression to find the oembed element in the HTML string
  let str = htmlString
  const oembedRegex = /<oembed[^>]*>/g;
  const oembedMatch = str.match(oembedRegex);

  // If an oembed element was found, convert it to an iframe element
  if (oembedMatch) {
    // @ts-ignore
    const oembedUrl = oembedMatch[0].match(/url="([^"]*)"/)[1];
    const iframeElement = `<iframe src="${oembedUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    str = str.replace(oembedRegex, iframeElement);
  }

  return str
}
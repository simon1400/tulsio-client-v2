interface IImage {
  alternativeText: string
  url: string
}

interface IImageData {
  attributes: IImage
}

interface IImageRoot {
  data?: IImageData
}

interface ICategoryNav {
  title: string
  slug: string
}

interface IDataArticles {
  background: string
  perex: string
  slug: string
  title: string
  image: IImageRoot
  labels: ILabelsRoot
}

interface ICategoryPage {
  nav: ICategoryNav
  articles: IDataArticles[]
  title: string
  description: string
  articleBase?: any
}

interface ILabel {
  title: string
  slug: string
}

interface ILabelsData {
  attributes: ILabel
}

interface ILabelsRoot {
  data: ILabelsData[]
}

interface IButtonLink {
  text: string
  link: string
}

interface ITransformDictionaryData {
  title: string
  content: string
  image: IImageRoot
  button?: IButtonLink
}

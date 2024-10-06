export interface IImage {
  alternativeText: string
  url: string
}

export interface IImageData {
  attributes: IImage
}

export interface IImageRoot {
  data: IImageData
}

export interface IImageArray {
  data: IImageData[]
}

export interface ILabel {
  title: string;
  slug: string;
}

export interface ILabelsData {
  attributes: ILabel
}

export interface ILabelsRoot {
  data: ILabelsData[]
}
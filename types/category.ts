import { IImageRoot } from "./image";
import { ILabelsRoot } from "./labels";

export interface ICategoryNav {
  title: string;
  slug: string;
}

export interface IDataArticles {
  background: string;
  perex: string;
  slug: string;
  title: string;
  image: IImageRoot;
  labels: ILabelsRoot;
}

export interface ICategoryPage {
  nav: ICategoryNav
  articles: IDataArticles[]
  title: string
  description: string
  articleBase?: any
}
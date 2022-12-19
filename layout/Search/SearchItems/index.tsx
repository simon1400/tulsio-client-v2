import dynamic from "next/dynamic";
import { FC } from "react";
import { connectHits } from "react-instantsearch-core";
import {ISearchItem} from "../SearchItem";
const SearchItem = dynamic(() => import('../SearchItem'), {suspense: true}) 

interface SearchItems {
  hits: ISearchItem[]
  title: string
}

const SearchItems: FC<SearchItems> = ({ title, hits }) => {

  return <></>

  if(!hits.length) {
    return <></>
  }

  return (
    <div className="result-block">
      <h4>{title}</h4>
      {hits.map((hit, index) => (
        <SearchItem key={index} data={hit} />
      ))}
    </div>
  );
}

export default SearchItems
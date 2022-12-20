// import {
//   InstantSearch,
//   Index,
//   Configure
// } from "react-instantsearch-dom";
// import { searchClient } from "../../lib/typesenseAdapter";
import closeCanvas from "../../helpers/closeCanvas";
import { useEffect, useRef } from "react";
// import dynamic from "next/dynamic";
import Link from "next/link";

// const SearchItems = dynamic(() => import('./SearchItems'), {suspense: true}) 
// const SearchBox = dynamic(() => import('./SearchBox'), {suspense: true}) ;
// const HasResult = dynamic(() => import('./HasResult'), {suspense: true}) ;

const Search = () => {

  const searchInput = useRef(null)

  useEffect(() => {
    if(searchInput && searchInput.current !== null){      
      // util.on(document, 'shown', "#search", () => {
      //   searchInput.current.focus()
      // })
    }
  }, [searchInput])

  return (
    <div id="search" className="uk-offcanvas canvas" uk-offcanvas="flip: true; overlay: true">
      <div className="uk-offcanvas-bar">
        <div className="canvas-head">
          <h3>Hledat</h3>
          <Link href="/" onClick={e => closeCanvas(e, '#search')}>
            <img className="uk-svg" hidden src="/assets/times.svg" uk-svg="" />
          </Link>
        </div>

        {/* <InstantSearch indexName="articles" searchClient={searchClient}>

          <SearchBox searchInput={searchInput} />

           <Index indexName="categories">
            <Configure hitsPerPage={5} />
            <SearchItems title="Kategorie" />
          </Index>

          <Index indexName="articles">
            <Configure hitsPerPage={5}/>
            <SearchItems title="Články" />
          </Index>

          <HasResult />

        </InstantSearch> */}
      </div>
    </div>
  )
}

export default Search

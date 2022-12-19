import Link from 'next/link'
import { FC } from 'react'

export interface ISearchItem {
  title: string
  perex?: string
  image?: string
  price?: string
  slug?: string
  chapters?: string[]
  category?: string[]
}

interface SearchItemProps {
  data: ISearchItem
}

const SearchItem: FC<SearchItemProps> = ({data}) => {

  let slug = '/' + data.slug

  if(data.category?.length) {
    slug = `/blog/${data.slug}`
  }

  const handleClose = () => {
    // window['UIkit'].offcanvas('#search').hide()
  }

  return (
    <Link href={slug} onClick={() => handleClose()} className={`result-item${!data.image ? ' without-img' : ''}`}>
      <div className="content">
        {!!data.image && <div className="img-search-wrap" style={{backgroundImage: `url(${data.image+'?format=webp&resize=50x50'})`}}></div>}
        <h5>{data.title}</h5>
      </div>
      {!!data.price && <div className="additional">
        <span>od 132 kc</span>
      </div>}
    </Link>
  )
}

export default SearchItem

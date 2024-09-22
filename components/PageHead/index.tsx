import type { FC, SyntheticEvent } from 'react'

import { Container, Typography } from '@mui/material'
import Nav from 'components/Nav'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllArticles } from 'stores/fetch/dataFetch'
import { selectType } from 'stores/slices/dataSlices'
import { selectCategoryNav } from 'stores/slices/navSlices'

import { CategoryTop } from './styles'

interface PageHeadProps {
  title: string
  category?: boolean
  center?: boolean
}

const PageHead: FC<PageHeadProps> = ({ title, category, center }) => {
  const router = useRouter()
  const nav = useSelector(selectCategoryNav)
  const type = useSelector(selectType)
  const dispatch = useDispatch()

  const handleMenu = (e: SyntheticEvent, slug: string) => {
    e.preventDefault()
    if (slug === '/blog') {
      router.push(type === 'blog' ? '/blog' : '/tags')
    } else {
      router.push(slug)
      // @ts-expect-error: some error
      dispatch(fetchAllArticles(slug))
    }
  }

  return (
    <CategoryTop>
      <Container>
        <Typography textAlign={center ? 'center' : 'left'} variant={'h1'}>
          {title}
        </Typography>
        {category && <Nav data={nav} handle={handleMenu} subMenu category />}
      </Container>
    </CategoryTop>
  )
}

export default PageHead

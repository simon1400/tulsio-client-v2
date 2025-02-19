import { InputAdornment, SvgIcon } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSearchBox, UseSearchBoxProps } from 'react-instantsearch';
import { SearchWrap } from './styled';
import SearchIcon from 'public/icons/search.svg'
import Close from 'public/icons/close.svg'
import Input from 'components/Input';
import { useRouter } from 'next/router';

interface ISearchBox extends UseSearchBoxProps {
  placeholder?: string;
}

const SearchBox = (props: ISearchBox & { onSearch?: (query: string) => void }) => {
  const { refine } = useSearchBox(props);
  const {placeholder, onSearch} = props
  const [value, setValue] = useState('')

  const router = useRouter()

  useEffect(() => {
    const query = value.trim()
    const input = /^[a-zA-Z0-9!?.,;:()'"-]+$/
    const queryWords = query.split(/\s+/)

    const isValidQuery = queryWords.length > 0 && queryWords.every(word => input.test(word));

    if (query.length >= 3 && isValidQuery) {
      refine(query)
      onSearch?.(query)
    } else {
      refine('')
      onSearch?.('')
    }
  }, [value, refine, onSearch])


  useEffect(() => {
    if(router.query['tulsio_article[query]']) {
      setValue(router.query['tulsio_article[query]'] as string)
    }
  }, [router])

  const handleClear = () => {
    setValue('')
  }

  return <SearchWrap>
    <Input
      placeholder={placeholder}
      value={value}
      autoFocus
      onChange={e => setValue(e.target.value)} 
      startAdornment={
        <InputAdornment position="start">
          <SvgIcon component={SearchIcon} sx={{ color: "white" }} />
        </InputAdornment>
      }
      endAdornment={
        value.length ? <InputAdornment position="end" onClick={() => handleClear()}>
          <SvgIcon component={Close} sx={{ color: "white", cursor: 'pointer' }} />
        </InputAdornment> : null
      }
    />
  </SearchWrap>;
}

export default SearchBox
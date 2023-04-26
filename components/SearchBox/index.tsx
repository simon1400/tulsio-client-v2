import { InputAdornment, SvgIcon } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import { useSearchBox, UseSearchBoxProps } from 'react-instantsearch-hooks-web';
import { SearchWrap } from './styled';
import SearchIcon from 'public/icons/search.svg'
import Close from 'public/icons/close.svg'
import Input from 'components/Input';
import { useRouter } from 'next/router';

interface ISearchBox extends UseSearchBoxProps {
  placeholder?: string;
}

const SearchBox = (props: ISearchBox) => {
  const { refine } = useSearchBox(props);
  const {placeholder} = props

  const [value, setValue] = useState<string>('')

  const router = useRouter()

  useEffect(() => {
    if(value.length >= 3) {
      refine(value)
    }else{
      refine('')
    }
  }, [value])

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
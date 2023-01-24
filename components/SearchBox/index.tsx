import { InputAdornment, SvgIcon } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSearchBox, UseSearchBoxProps } from 'react-instantsearch-hooks-web';
import { Search, SearchWrap } from './styled';
import SearchIcon from 'public/icons/search.svg'
import Close from 'public/icons/close.svg'

const SearchBox = (props: UseSearchBoxProps) => {
  const { refine } = useSearchBox(props);

  const [value, setValue] = useState('')

  useEffect(() => {
    if(value.length >= 3) {
      refine(value)
    }else{
      refine('')
    }
  }, [value])

  const handleClear = () => {
    setValue('')
  }

  return <SearchWrap>
    <Search
      id="search-faq"
      placeholder="Hledat dotaz..." 
      value={value}
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
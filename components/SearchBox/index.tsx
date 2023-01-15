import { Input, InputAdornment, InputBase, OutlinedInput, Paper, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSearchBox, UseSearchBoxProps } from 'react-instantsearch-hooks-web';
import { Search, SearchWrap } from './styled';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

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
          <SearchIcon sx={{ color: "white" }} />
        </InputAdornment>
      }
      endAdornment={
        value.length ? <InputAdornment position="end" onClick={() => handleClear()}>
          <ClearIcon sx={{ color: "white", cursor: 'pointer' }} />
        </InputAdornment> : null
      }
    />
  </SearchWrap>;
}

export default SearchBox
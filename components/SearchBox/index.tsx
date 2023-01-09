import { Input, InputAdornment, InputBase, Paper, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSearchBox, UseSearchBoxProps } from 'react-instantsearch-hooks-web';
import { Search } from './styled';
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

  return <Search>
    <Input
      placeholder="Hledat dotaz..." 
      value={value}
      className={value.length ? "activeInput" : ''}
      onChange={e => setValue(e.target.value)} 
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
      endAdornment={
        value.length ? <InputAdornment position="end" onClick={e => handleClear()}>
          <ClearIcon />
        </InputAdornment> : null
      }
    />
  </Search>;
}

export default SearchBox
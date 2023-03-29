import React from 'react'
import { styled, TextField, InputAdornment } from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const CInput = styled(TextField)`
    width:50%;
    @media (max-width: 768px){
      width:70%;
    }   
`

const CustomInput = ({name, value, ...rest}) => {
    

  return (
    <>
     <CInput
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchRoundedIcon />
            </InputAdornment>
          ),
        }}
        type="search"
        name={name}
        value={value}
        variant="outlined"
        size="small"
        {...rest}
      />
    </>
  )
}

export default CustomInput
import React from 'react'
import { styled, TextField, InputAdornment } from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const CInput = styled(TextField)`
    width:50%    
`

const CustomInput = () => {
    

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
        variant="outlined"
        size="small"
      />
    </>
  )
}

export default CustomInput
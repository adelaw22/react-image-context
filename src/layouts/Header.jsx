import React from 'react'
import { styled, Box, TextField, Button, InputAdornment } from '@mui/material'
import CustomInput from '../components/CustomInput';
import BrandLogo from '../assets/Brandlogo.png'
import NavFilter from '../components/NavFilter';


  const DivWrapper = styled(Box)(
    ({ theme }) =>`
      padding-block:${theme.spacing(5,4)} 
   `, 
   )

   const LogoWrapper = styled(Box)(
    ({ theme }) =>`
      margin-bottom:${theme.spacing(3)};
      width: 60%;
      margin-inline: ${theme.spacing("auto")};
      img{
        display:block;
        object-fit:cover;
        width:50%;
        min-width:50%;
        margin-inline: ${theme.spacing("auto")};
      }
    `
   )
   const SearchWrapper = styled(Box)(
    ({ theme }) =>`
    justify-content: center;
    display: flex;
    .MuiButton-root{
      margin-inline:${theme.spacing(2)}
    }
    `
   )

    
const Header = () => {
  

  return (
    <DivWrapper>
        <LogoWrapper>
            <img src={BrandLogo} alt=""/>
        </LogoWrapper>

        <SearchWrapper>
         <CustomInput/>
          <Button variant="contained">Search</Button>
        </SearchWrapper>
        <NavFilter/>  
     
    </DivWrapper>
  )
}

export default Header
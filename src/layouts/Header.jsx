import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { styled, Box, Button} from '@mui/material'
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
      @media (max-width: 960px){
        img{
          width:70%;
        }
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

    
const Header = ({imageData }) => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = ()=>{
      imageData(inputValue)
      navigate(`/${inputValue}`)
      setInputValue("")  
  }
 
  return (
    <DivWrapper>
        <LogoWrapper>
            <img src={BrandLogo} alt=""/>
        </LogoWrapper>

        <SearchWrapper>
         <CustomInput name="search" onChange={(e)=>setInputValue(e.target.value)} value={inputValue} />
          <Button  variant="contained" onClick={handleSubmit} disabled={!inputValue} >Search</Button>
        </SearchWrapper>
        <NavFilter/>  
     
    </DivWrapper>
  )
}

export default Header
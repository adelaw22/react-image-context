import { styled, Box, Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBox = styled(Box)(
  ({theme})=>`
    display:flex;
    justify-content: center;
    margin-top:${theme.spacing(3)};
    .MuiButton-root{
      margin-inline:${theme.spacing(2)};
     a{ 
      color: #fff;
      text-decoration: none;
      }
    }
`
)
const NavFilter = () => {
 const mainRoutes =  ['life','human','race', 'origin']

  return (
  <NavBox>
    {
      mainRoutes.map((item, i)=>
         <Button key={i} variant='contained' color='primary'><NavLink to={`/${item}`}>{item}</NavLink></Button>
      )
    }
  </NavBox>
  )
}

export default NavFilter
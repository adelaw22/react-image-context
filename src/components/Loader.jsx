import React from 'react'
import { styled, Box } from '@mui/system'
import Loading from '../assets/loading-gif.gif'

const LoadingWrapper = styled(Box)(
    ({theme})=>`
        display:flex;
        justify-content:center;
        width:50%;
        margin-inline:${theme.spacing("auto")};
        img{
            width:20%;
        }
    `
)

const Loader = () => {

  return (
    <LoadingWrapper>
        <img src={Loading} alt=''/>
    </LoadingWrapper>
  )
}

export default Loader
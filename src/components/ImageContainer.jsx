import React from 'react'
import {styled, Box} from '@mui/material'

const GridBox = styled(Box)(({theme})=>`
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    gap:16px;

`)

const ImgBox = styled(Box)(({theme})=>`
    width: 100%;
    height: 165px;
    overflow: hidden;
    img{
        width: 100%;
        transform: scale(1.25);
        transition: transform 1.25s;
    } 
   '&:hover':{
        img{
            transform: scale(1.65);
        }
    }
   
`)

const ImageContainer = ({data}) => {


  return (
    <GridBox> 
            {data.map((image, i) => (
                <ImgBox key={i}>
                    <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} alt={image.title} />
                </ImgBox>
            ))}
      </GridBox>
  )
}

export default ImageContainer
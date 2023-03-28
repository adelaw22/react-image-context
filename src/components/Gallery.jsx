import React, { useContext, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { ImageContext } from '../context/ImageContext';
import {styled,Typography, Box, Grid} from '@mui/material'
import Loader from './Loader'
import ImageContainer from './ImageContainer'

const GalleryWrapper = styled(Box)(
    ({theme})=>`
    margin-block:${theme.spacing(3)}
    `
)

const LabelTag = styled(Box)(({theme})=>`
    text-align:center;
    padding: ${theme.spacing(2)}
`)

const Gallery = ({searchValue}) => {
  const {searchvalue} = useParams()
  const {isLoading, images, imageData } = useContext(ImageContext)

  useEffect(()=>{
    imageData(searchValue)
  },[searchValue])

 function imgTitle(title){
    return title && title[0].toUpperCase() + title.slice(1);
  }

  return(
    <GalleryWrapper>
       <LabelTag>
            <Typography variant="h3"> {imgTitle(searchvalue ? searchvalue : searchValue)} Images</Typography>
       </LabelTag>
       {isLoading ?  <Loader/> : <ImageContainer data={images}/>}
       
    </GalleryWrapper>
   
    )

}

export default Gallery
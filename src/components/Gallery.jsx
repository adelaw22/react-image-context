import React, {useContext} from 'react'
import {styled,Typography, Box, Grid} from '@mui/material'
import Loader from './Loader'
import { ImageContext } from '../context/ImageContext'

const GalleryWrapper = styled(Box)(
    ({theme})=>`
    margin-block:${theme.spacing(3)}
    `
)

const LabelTag = styled(Box)(({theme})=>`
    text-align:center;
    padding: ${theme.spacing(2)}
`)

const Gallery = () => {
  const {isLoading, images} = useContext(ImageContext)


  return(
  <>
 <Loader/> 
  <GalleryWrapper>
       <LabelTag>
            <Typography variant="h3">LIFE</Typography>
       </LabelTag>

      
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
            {/* {Array.map((_, index) => (
                <Grid  xs={2} sm={4} md={4} key={index}>
                    <img src={} alt=''/>
                </Grid>
            ))} */}
      </Grid>

    </GalleryWrapper>
    </>
    )

}

export default Gallery
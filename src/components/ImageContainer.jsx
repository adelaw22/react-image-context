import React from 'react'
import {styled, Grid} from '@mui/material'



const ImageContainer = ({data}) => {

  return (
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> 
            {data.map((image, index) => (
                <Grid  xs={2} sm={4} md={4} key={index}>
                    <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} alt={image.title} />
                </Grid>
            ))}
      </Grid>
  )
}

export default ImageContainer
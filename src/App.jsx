import React, { useState, useContext } from 'react'
import { BrowserRouter as Router, Routes,  Route, useParams} from "react-router-dom"
import { ImageContext } from './context/ImageContext';
import { styled,ThemeProvider, Box } from "@mui/material"
import { GlobalTheme } from "./GlobalTheme"
import Header from './layouts/Header'
import Gallery from './components/Gallery'

 const ContentWrapper = styled(Box)`
    max-width:90%;
    width:80%;
    margin-inline: auto;
  `
  
function App() {  
  const {images, imageData} = useContext(ImageContext)


  return (
    <ThemeProvider theme={GlobalTheme}>
      <Router>
        <ContentWrapper>
          <Header imageData={imageData}/>
      
        <Routes>
            <Route path="/" element={<Gallery searchValue='life' />} />
            <Route path="/life" element={<Gallery searchValue='life' />} />
            <Route path="/human" element={<Gallery searchValue="human" />} />
            <Route path="/race" element={<Gallery searchValue="race"/>} />
            <Route path="/origin" element={<Gallery searchValue="origin"/>} />
            <Route path="/:searchvalue" element={<Gallery/>} />
        </Routes>
        </ContentWrapper>

       
      </Router>
      
    </ThemeProvider>
  )
}

export default App

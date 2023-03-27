import { BrowserRouter as Router, Routes,  Route} from "react-router-dom"
import { styled,ThemeProvider, Box } from "@mui/material"
import { GlobalTheme } from "./GlobalTheme"
import Header from './layouts/Header'
// import Loader from "./components/Loader"
import Gallery from './components/Gallery'

 const ContentWrapper = styled(Box)`
    min-width:70%;
    width:70%;
    margin-inline: auto;
  `
  
function App() {  

  return (
    <ThemeProvider theme={GlobalTheme}>
      <Router>
        <ContentWrapper>
          <Header/>
           {/* <Loader/> */}
        <Routes>
            <Route path="/" element={<Gallery />} />
            {/* <Route path="/" element={<Gallery />} />
            <Route path="/" element={<Gallery />} />
            <Route path="/" element={<Gallery />} /> */}
        </Routes>
        </ContentWrapper>

       
      </Router>
      
    </ThemeProvider>
  )
}

export default App

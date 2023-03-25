import { BrowserRouter as Router,  Route} from "react-router-dom"
import { Box } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import { styled } from "@mui/material/styles"
import { GlobalTheme } from "./GlobalTheme"
import Header from './layouts/Header'

 const ContentWrapper = styled(Box)`
    min-width:70%;
    width:70%;
    margin-inline: auto;
  `
  
function App() {

  // const 
 

  return (
    <ThemeProvider theme={GlobalTheme}>
      <Router>
        <ContentWrapper>
          <Header/>
        </ContentWrapper>
{/* 
        <Routes>
            <Route path="/" element={<SignIn />} />
        </Routes> */}
      </Router>
      
    </ThemeProvider>
  )
}

export default App

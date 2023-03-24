import { Box } from "@mui/material"
import { ThemeProvider } from "@mui/material/styles"
import { styled } from "@mui/material/styles"
import { GlobalTheme } from "./GlobalTheme"
import Header from './layouts/Header'


function App() {
  const ContentWrapper = styled(Box)`
    width:90%;
    margin-inline: auto;
  `

  return (
    <ThemeProvider theme={GlobalTheme}>
      <ContentWrapper>

        <Header/>
        
      </ContentWrapper>
    </ThemeProvider>
  )
}

export default App

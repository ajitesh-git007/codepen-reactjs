import { Box, styled} from "@mui/material"
import { useContext } from "react"
import { DataContext } from "../context/DataProvider"




export default function Result(){

    const Container = styled(Box)`
    height: 41vh;
    `
    
    const {html, css, js} = useContext(DataContext)
    
    const srcCode = `
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    
    `
    
    
    return(

      <Container>
        <iframe
        srcDoc={srcCode}
        title = "Output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
        frameBorder={0}
        />

      </Container>

        
    );
}
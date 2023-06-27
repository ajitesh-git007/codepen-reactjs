import {AppBar, Toolbar, styled} from '@mui/material';
import logo from "./codepen-logo.png"

const Container = styled(AppBar)
   ` background: #000000;
    height: 9vh;`




export default function Header(){
    return(
    
    <Container position="static">
    
        <Toolbar>
           <img src={logo} alt="" srcset="" />
        </Toolbar>
    
    </Container>



    


    )
}
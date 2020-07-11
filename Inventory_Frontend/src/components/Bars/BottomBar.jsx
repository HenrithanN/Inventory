import React from 'react';
import {AppBar,Toolbar,Typography,IconButton} from '@material-ui/core';

const BottomBar = () =>(
    
<AppBar position="static">
    <Toolbar>
        <Typography variant="h6">Obrigado por utilizar nossos serviços, qualquer duvida entre em contato pelas redes sociais:</Typography>
            <IconButton href="https://github.com/HenrithanN/Inventory" target="_Blank">
            <img alt="logoGitHub"src="../GitHubIcon.ico" />
                GitHub
            </IconButton>

            <IconButton href="https://www.facebook.com/JonathanHK1515" target="_Blank">
            <img alt="logoFacebook"src="../FacebookIcon.ico" />
                Facebook
            </IconButton>

            <IconButton href="https://www.linkedin.com/in/jonathan-henrique-1b4a69144/" target="_Blank">
            <img alt="logoLinkedin"src="../LinkedinIcon.ico" />
                LinkedIn
            </IconButton>
  </Toolbar>
</AppBar>
)
export default BottomBar;
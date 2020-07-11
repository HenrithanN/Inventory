import React, { Component } from 'react';
import api from '../services/api';
import Button from '@material-ui/core/Button';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import {Card,CardActionArea,CardActions, CardContent,CardMedia} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import useStyles from '../components/Cards/UseCard.jsx'


  class App extends Component{
    state = {
      clientes: [],
    }
    
  
    async componentDidMount(){
      const response = await api.get('cliente/listar-todos');
      this.setState({ clientes: response.data })
    }
  
    render(){
      const { clientes } = this.state;
      
  return (
    <div>
      
    <div>
      
    
    <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Inventory
          </Typography>
          
        </Toolbar>
        <Typography variant="h5"align="center">
            Listagem de Clientes
          </Typography>
      </AppBar>
      </div>
      <br/>
      <div>
    
          {clientes.map((Cliente) => (
            <Card key={Cliente.idCliente}>
            <CardActionArea>
              <CardMedia
                image="https://i0.wp.com/www.techcult.com.br/wp-content/uploads/2017/03/perfil-twitter.png?resize=1024%2C1024&ssl=1"
                title="Foto do CLiente"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {Cliente.nome}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Cartão de Cliente Cadastrado no Sistema Inventory, para
                  visualizar mais informações clique em Detalhes.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
            <Button variant="contained" color="primary" size="large" >
              Detalhes
              </Button>
              
            </CardActions>
          </Card>
          ))}
    </div>
    <div>
    

    
    </div>
    </div>
  );

}
  }
export default App;
import React, { Component } from 'react';
import api from '../services/api';
import StyledTableRow from '../components/Tabelas/TableRow.jsx'
import StyledTableCell from '../components/Tabelas/TableCell.jsx'
import {Button, Table, TableBody, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'
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
          <Link to="/" style={{ color: 'inherit' , textDecoration: 'none' } }>
              Inventory
              </Link>
          </Typography>
          
        </Toolbar>
        <Typography variant="h5"align="center">
            Listagem de Clientes
          </Typography>
      </AppBar>
      </div>
      <br/>
      <div>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Nome</StyledTableCell>            
            <StyledTableCell align="center">Código</StyledTableCell>
            <StyledTableCell align="right">Ações</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clientes.map((Cliente) => (
            <StyledTableRow key={Cliente.idCliente}>
              <StyledTableCell>
              <Link to={('https://jsonplaceholder.typicode.com/comments?postId=x' + Cliente.idCliente)} style={{ color: 'inherit' , textDecoration: 'none' } }>
              Inventory
              </Link>
              {Cliente.nome}
              </StyledTableCell>
              <StyledTableCell align="center">{Cliente.idCliente}
              </StyledTableCell>

              <StyledTableCell align="right">
              <Button variant="contained" color="primary" size="large" onClick={() => alert(
               'Codigo:' +Cliente['idCliente']+ '\n'+ 
               'Nome: ' +Cliente['nome'] + '\n' +
                'CPF: ' + Cliente['cpf']+ '\n'+
                'RG: ' + Cliente['rg']+ '\n'+
               'Email:' +Cliente['email']+ '\n'+ 
               'Endereço:' +Cliente['endereco']+ '\n'+ 
               'telefonecelular:' +Cliente['telefoneCelular'] + '\n' +
               'TelefoneFixo: '+ Cliente['telefoneFixo']
               
                             
               
               )}>Detalhes</Button>
              
              </StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <div>
    

    
    </div>
    </div>
  );

}
  }
export default App;
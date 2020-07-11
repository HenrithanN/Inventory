import React, { useState, useEffect } from 'react';
import {Card,CardActionArea,CardActions, CardContent, CardMedia} from '@material-ui/core'
import { Typography, Grid, TableBody, Button, Table, TextField, makeStyles} from '@material-ui/core';
import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails} from '@material-ui/core'
import StyledTableCell from '../../components/Tabelas/TableCell.jsx'
import StyledTableRow from '../../components/Tabelas/TableRow.jsx'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BottomBar from '../../components/Bars/BottomBar';
import TopBar from '../../components/Bars/TopBar';
import api from '../../services/api';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '5px solid #f57c00',
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    width: 425,    
    margin: theme.spacing(1),
    flexDirection:'column',
  },
  media: {
    height: 200,
  },
  
}));

export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const classes = useStyles();
  // Hooks para Atualizar Cliente
  const [nome,updateNome] = useState('');
  const handleNomeChange = event => updateNome(event.target.value)
  
  const [telefoneFixo,updateTFixo] = useState('');
  const handleTFChange = event => updateTFixo(event.target.value)
  
  const [telefoneCelular,updateTCelular] = useState('');
  const handleTCChange = event => updateTCelular(event.target.value)
  
  const [email,updateEmail] = useState('');
  const handleEmailChange = event => updateEmail(event.target.value)

  const [enderecoImagem,updateImagem] = useState('');
  const handleImagemChange = event => updateImagem(event.target.value)
  
  const [rg,updateRG] = useState('');
  const handleRGChange = event => updateRG(event.target.value)
  
  const [cpf,updateCPF] = useState('');
  const handleCPFChange = event => updateCPF(event.target.value)
  
  const [endereco,updateEndereco] = useState('');
  const handleEnderecoChange = event => updateEndereco(event.target.value)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      api.get('cliente/listar-todos').then(response => {
      setClientes(response.data)
      });
      
    }, 5);
    return () => clearTimeout(timer);

  }, []);
  
  const deleteUser = idCliente => {
    api.delete('/Cliente/excluir?idCliente='+idCliente)
        .then(res => {
          console.log(res.data);
          window.location.reload();
        });
    }
  const updateUser = (idCliente) => {
    api.put('/Cliente/atualizar',{idCliente: idCliente, nome:nome,telefoneFixo:telefoneFixo, telefoneCelular:telefoneCelular,email:email,rg:rg,cpf:cpf,endereco:endereco,enderecoImagem:enderecoImagem})
        .then(res => {
          console.log(res.data);  
      });
    
}
  const handleSubmit = event =>{
    event.preventDefault()
  }
 
    return (          
    <Grid container >
      
      <TopBar />

      {clientes.map((Cliente) => (
      <Card key={Cliente.idCliente} className={classes.root}>

       <CardActionArea>
          <CardMedia className={classes.media}image={Cliente.enderecoImagem}title="Foto do Cliente"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {Cliente.nome}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Cartão do Cliente {Cliente.nome} Cadastrado no Sistema Inventory.
            Para visualizar mais informações clique em Detalhes.
            </Typography>              
          </CardContent>
        </CardActionArea>
        
        <CardActions>
          <ExpansionPanel className={classes.root}>

            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}   aria-controls="panel1a-content" id="panel1a-header">
              <Typography >
              Detalhes
              </Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails>

              <Table border="">
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell>Código:</StyledTableCell>
                    <StyledTableCell>{Cliente.idCliente}</StyledTableCell>              
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Nome:</StyledTableCell>
                    <StyledTableCell>{Cliente.nome}</StyledTableCell>              
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Telefone Fixo:</StyledTableCell>
                    <StyledTableCell>{Cliente.telefoneFixo}</StyledTableCell>              
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Celular:</StyledTableCell>
                    <StyledTableCell>{Cliente.telefoneCelular}</StyledTableCell>              
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Email:</StyledTableCell>
                    <StyledTableCell>{Cliente.email}</StyledTableCell>              
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>RG:</StyledTableCell>
                    <StyledTableCell>{Cliente.rg}</StyledTableCell>              
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>CPF:</StyledTableCell>
                    <StyledTableCell>{Cliente.cpf}</StyledTableCell>              
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Endereço:</StyledTableCell>
                    <StyledTableCell>{Cliente.endereco}</StyledTableCell>              
                  </StyledTableRow>
                </TableBody>
              </Table>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          </CardActions>

          <CardActions>   
            <ExpansionPanel className={classes.root}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}  aria-controls="panel1a-content" id="panel1a-header">
                <Typography >
                Editar
                </Typography>
              </ExpansionPanelSummary>

              <ExpansionPanelDetails>
                <form onSubmit={handleSubmit}>
                <Table>
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell>Código:</StyledTableCell>
                      <TextField defaultValue={Cliente.idCliente}variant="outlined" disabled/> 
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Nome:</StyledTableCell>
                      <TextField  id="outlined-basic"onChange={handleNomeChange} defaultValue={Cliente.nome}variant="outlined"/> 
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>TelefoneFixo:</StyledTableCell>
                      <TextField onChange={handleTFChange} defaultValue={Cliente.telefoneFixo}placeholder={Cliente.telefoneFixo}variant="outlined"/>             
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Celular:</StyledTableCell>
                      <TextField  onChange={handleTCChange} defaultValue={Cliente.telefoneCelular}placeholder={Cliente.telefoneCelular}variant="outlined"/>         
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Email:</StyledTableCell>
                      <TextField onChange={handleEmailChange} defaultValue={Cliente.email}placeholder={Cliente.email}  variant="outlined"/>               
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>RG:</StyledTableCell>
                      <TextField onChange={handleRGChange} defaultValue={Cliente.rg}placeholder={Cliente.rg}variant="outlined"/>               
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>CPF:</StyledTableCell>
                      <TextField onChange={handleCPFChange} defaultValue={Cliente.cpf}placeholder={Cliente.cpf}variant="outlined"/>              
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Endereço:</StyledTableCell>
                      <TextField onChange={handleEnderecoChange} defaultValue={Cliente.endereco}placeholder={Cliente.endereco}variant="outlined"/>             
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Link Imagem:</StyledTableCell>
                      <TextField onChange={handleImagemChange} defaultValue={Cliente.enderecoImagem}placeholder={Cliente.enderecoImagem}variant="outlined"/>                               
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell colSpan="2" align="center">
                        <Button type="submit" onClick={()=>updateUser(Cliente.idCliente)}variant="contained" color="default" size="large" >
                        Salvar Alterações
                        </Button>
                        {/* onClick={()=>updateUser(Cliente.idCliente)} */}
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
                </form>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </CardActions>
          <CardActions > 
            <Grid container direction="row"justify="space-around"alignItems="baseline">
            <Button variant="contained" color="primary" size="large" onClick={() =>deleteUser(Cliente.idCliente)}>
            Excluir    
            </Button>
            <Link to="/CriarCliente" style={{ color: 'inherit' , textDecoration: 'none' } }>
            <Button variant="contained" color="primary" size="large">
            Cadastrar Novo    
            </Button>
            </Link>   
            </Grid>      
          </CardActions> 
          
      </Card>
      ))}
        
      <BottomBar />

    </Grid>
    );
  }

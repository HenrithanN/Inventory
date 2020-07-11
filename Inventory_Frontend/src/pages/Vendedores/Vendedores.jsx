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
const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '5px solid #f57c00',
    padding: theme.spacing(2, 4, 3),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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

export default function Vendedores() {
  const [vendedores, setVendedores] = useState([]);
  const classes = useStyles();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      api.get('Vendedor/listar-todos').then(response => {
      setVendedores(response.data)
      });
      
    }, 5);
    return () => clearTimeout(timer);

  }, []);
  
  const deleteVendedor = idVendedor => {
    api.delete('/Vendedor/excluir?idVendedor='+idVendedor)
        .then(res => {
          console.log(res.data);
          window.location.reload();
        });
    }
  
    return (          
    <Grid container >
      
      <TopBar />

      {vendedores.map((Vendedor) => (
      <Card key={Vendedor.idFornecedor} className={classes.root}>

       <CardActionArea>
          <CardMedia className={classes.media}image={Vendedor.enderecoImagem}title="Foto do Fornecedor"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {Vendedor.nome}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Cartão do  Vendedor {Vendedor.nome} Cadastrado no Sistema Inventory.
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
                    <StyledTableCell>{Vendedor.idVendedor}</StyledTableCell>              
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Nome:</StyledTableCell>
                    <StyledTableCell>{Vendedor.nome}</StyledTableCell>              
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Telefone Fixo:</StyledTableCell>
                    <StyledTableCell>{Vendedor.telefoneFixo}</StyledTableCell>              
                  </StyledTableRow>                  
                  <StyledTableRow>
                    <StyledTableCell>Email:</StyledTableCell>
                    <StyledTableCell>{Vendedor.email}</StyledTableCell>              
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>CNPJ:</StyledTableCell>
                    <StyledTableCell>{Vendedor.cnpj}</StyledTableCell>              
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
                <Table>
                  <TableBody>
                    <StyledTableRow>
                      <StyledTableCell>Código:</StyledTableCell>
                      <TextField defaultValue={Vendedor.idVendedor}variant="outlined" disabled/> 
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Nome:</StyledTableCell>
                      <TextField defaultValue={Vendedor.nome}variant="outlined"/>             
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>TelefoneFixo:</StyledTableCell>
                      <TextField defaultValue={Vendedor.telefoneFixo}variant="outlined"/>             
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Email:</StyledTableCell>
                      <TextField defaultValue={Vendedor.email}variant="outlined"/>               
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>CNPJ:</StyledTableCell>
                      <TextField defaultValue={Vendedor.cnpj}variant="outlined"/>              
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Link Imagem:</StyledTableCell>
                      <TextField defaultValue={Vendedor.enderecoImagem}variant="outlined"/>             
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell colSpan="2" align="center">
                        <Button variant="contained" color="default" size="large" >
                        Salvar Alterações
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
                </Table>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </CardActions>
          <CardActions >   
            <Button variant="contained" color="primary" size="large" onClick={() =>deleteVendedor(Vendedor.idVendedor)}>
            Excluir    
            </Button>         
          </CardActions> 
          
      </Card>
      ))}
        
      <BottomBar />

    </Grid>
    );
  }

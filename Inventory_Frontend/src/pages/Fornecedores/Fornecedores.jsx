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
import {Link} from 'react-router-dom'
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

export default function Fornecedores() {
  const [fornecedores, setFornecedores] = useState([]);
  const classes = useStyles();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      api.get('Fornecedor/listar-todos').then(response => {
      setFornecedores(response.data)
      });
      
    }, 5);
    return () => clearTimeout(timer);

  }, []);
  
  const deleteFornecedor = idFornecedor => {
    api.delete('/Fornecedor/excluir?idFornecedor='+idFornecedor)
        .then(res => {
          console.log(res.data);
          window.location.reload();
        });
    }
  
    return (          
    <Grid container >
      
      <TopBar />

      {fornecedores.map((Fornecedor) => (
      <Card key={Fornecedor.idFornecedor} className={classes.root}>

       <CardActionArea>
          <CardMedia className={classes.media}image={Fornecedor.enderecoImagem}title="Foto do Fornecedor"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {Fornecedor.nome}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Cartão do  {Fornecedor.nome} Cadastrado no Sistema Inventory.
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
                    <StyledTableCell>{Fornecedor.idFornecedor}</StyledTableCell>              
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Nome:</StyledTableCell>
                    <StyledTableCell>{Fornecedor.nome}</StyledTableCell>              
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Telefone Fixo:</StyledTableCell>
                    <StyledTableCell>{Fornecedor.telefoneFixo}</StyledTableCell>              
                  </StyledTableRow>                  
                  <StyledTableRow>
                    <StyledTableCell>Email:</StyledTableCell>
                    <StyledTableCell>{Fornecedor.email}</StyledTableCell>              
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>CNPJ:</StyledTableCell>
                    <StyledTableCell>{Fornecedor.cnpj}</StyledTableCell>              
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
                      <TextField defaultValue={Fornecedor.idFornecedor}variant="outlined" disabled/> 
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Nome:</StyledTableCell>
                      <TextField defaultValue={Fornecedor.nome}variant="outlined"/>             
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>TelefoneFixo:</StyledTableCell>
                      <TextField defaultValue={Fornecedor.telefoneFixo}variant="outlined"/>             
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Email:</StyledTableCell>
                      <TextField defaultValue={Fornecedor.email}variant="outlined"/>               
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>CNPJ:</StyledTableCell>
                      <TextField defaultValue={Fornecedor.cnpj}variant="outlined"/>              
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Link Imagem:</StyledTableCell>
                      <TextField defaultValue={Fornecedor.enderecoImagem}variant="outlined"/>             
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
            <Grid container direction="row"justify="space-around"alignItems="baseline">
            <Button variant="contained" color="primary" size="large" onClick={() =>deleteFornecedor(Fornecedor.idFornecedor)}>
            Excluir    
            </Button>
            <Link to="/CriarFornecedor" style={{ color: 'inherit' , textDecoration: 'none' } }>
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

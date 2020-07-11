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

export default function SemEstoque() {
  const [estoques, setEstoques] = useState([]);
  const classes = useStyles();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      api.get('estoque/sem-estoque').then(response => {
      setEstoques(response.data)
      });
      
    }, 5);
    return () => clearTimeout(timer);

  }, []);
  
  const deleteEstoque = idEstoque => {
    api.delete('/Estoque/excluir?idEstoque='+idEstoque)
        .then(res => {
          console.log(res.data);
          window.location.reload();
        });
    }
   
    return (          
    <Grid container >
      
      <TopBar />

      {estoques.map((Estoque) => (
      <Card key={Estoque.idEstoque} className={classes.root}>

       <CardActionArea>
          <CardMedia className={classes.media}image={Estoque.enderecoImagem}title="Foto do Estoque"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {Estoque.nome}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Cartão do Estoque de {Estoque.nome} Cadastrado no Sistema Inventory.
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
                    <StyledTableCell>{Estoque.idEstoque}</StyledTableCell>              
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Nome:</StyledTableCell>
                    <StyledTableCell>{Estoque.nome}</StyledTableCell>              
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Quantidade:</StyledTableCell>
                    <StyledTableCell>{Estoque.quantidade}</StyledTableCell>              
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
                      <TextField defaultValue={Estoque.idEstoque}variant="outlined" disabled/> 
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Nome:</StyledTableCell>
                      <TextField defaultValue={Estoque.nome}variant="outlined"/>             
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Quantidade:</StyledTableCell>
                      <TextField defaultValue={Estoque.quantidade}variant="outlined"/>             
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Link Imagem:</StyledTableCell>
                      <TextField  defaultValue={Estoque.enderecoImagem}variant="outlined"/>         
                    </StyledTableRow>                    
                  </TableBody>
                </Table>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </CardActions>
          <CardActions >   
            <Button variant="contained" color="primary" size="large" onClick={() =>deleteEstoque(Estoque.idEstoque)}>
            Excluir    
            </Button>         
          </CardActions> 
          
      </Card>
      ))}
        
      <BottomBar />

    </Grid>
    );
  }

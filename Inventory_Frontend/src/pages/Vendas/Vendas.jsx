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

export default function Vendas() {
  const [vendas, setVendas] = useState([]);
  const classes = useStyles();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      api.get('Venda/listar-todos').then(response => {
      setVendas(response.data)
      });
      
    }, 5);
    return () => clearTimeout(timer);

  }, []);
  
  const deleteVenda = idVenda => {
    api.delete('/Vendedor/excluir?idVendedor='+idVenda)
        .then(res => {
          console.log(res.data);
          window.location.reload();
        });
    }
  
    return (          
    <Grid container >
      
      <TopBar />

      {vendas.map((Venda) => (
      <Card key={Venda.idVenda} className={classes.root}>

       <CardActionArea>
          <CardMedia className={classes.media}image={Venda.enderecoImagem}title="Foto do Fornecedor"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {Venda.dataVenda}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Cartão de  Venda Realizada no Sistema Inventory.
            No dia {Venda.dataVenda}
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
                    <StyledTableCell>Código Venda:</StyledTableCell>
                    <StyledTableCell>{Venda.idVenda}</StyledTableCell>              
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Código Produto:</StyledTableCell>
                    <StyledTableCell>{Venda.idProduto}</StyledTableCell>              
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Código Vendedor:</StyledTableCell>
                    <StyledTableCell>{Venda.idVendedor}</StyledTableCell>              
                  </StyledTableRow>                  
                  <StyledTableRow>
                    <StyledTableCell>Código Cliente:</StyledTableCell>
                    <StyledTableCell>{Venda.idCliente}</StyledTableCell>              
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Qtd Vendida:</StyledTableCell>
                    <StyledTableCell>{Venda.qtdVendida}</StyledTableCell>              
                  </StyledTableRow>                  
                  <StyledTableRow>
                    <StyledTableCell>Valor Total:</StyledTableCell>
                    <StyledTableCell>{Venda.valorTotal}</StyledTableCell>              
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell>Data Venda:</StyledTableCell>
                    <StyledTableCell>{Venda.dataVenda}</StyledTableCell>              
                  </StyledTableRow>                  
                  <StyledTableRow>
                    <StyledTableCell>Descrição:</StyledTableCell>
                    <StyledTableCell>{Venda.descricao}</StyledTableCell>              
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
                      <StyledTableCell>Código Venda:</StyledTableCell>
                      <TextField defaultValue={Venda.idVenda}variant="outlined" disabled/> 
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Código Produto:</StyledTableCell>
                      <TextField defaultValue={Venda.idProduto}variant="outlined"/>             
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Código Cliente:</StyledTableCell>
                      <TextField defaultValue={Venda.idCliente}variant="outlined"/>             
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Qtd Vendida:</StyledTableCell>
                      <TextField defaultValue={Venda.qtdVendida}variant="outlined"/>               
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Valor Total:</StyledTableCell>
                      <TextField defaultValue={Venda.valorTotal}variant="outlined"/>              
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Data Venda:</StyledTableCell>
                      <TextField defaultValue={Venda.dataVenda}variant="outlined"/>               
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Descrição:</StyledTableCell>
                      <TextField defaultValue={Venda.descricao}variant="outlined"/>              
                    </StyledTableRow>
                    <StyledTableRow>
                      <StyledTableCell>Link Imagem:</StyledTableCell>
                      <TextField defaultValue={Venda.enderecoImagem}variant="outlined"/>             
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
            <Button variant="contained" color="primary" size="large" onClick={() =>deleteVenda(Venda.idVenda)}>
            Excluir    
            </Button>         
          </CardActions> 
          
      </Card>
      ))}
        
      <BottomBar />

    </Grid>
    );
  }

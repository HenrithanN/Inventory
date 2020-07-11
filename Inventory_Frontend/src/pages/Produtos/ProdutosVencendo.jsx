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

export default function ProdutosVencendo() {
  const [produtos, setProdutos] = useState([]);
  const classes = useStyles();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      api.get('Produto/produtos-vencendo').then(response => {
      setProdutos(response.data)
      });
      
    }, 5);
    return () => clearTimeout(timer);

  }, []);
  
  const deleteProduto = idProduto => {
    api.delete('/Produto/excluir?idProduto='+idProduto)
        .then(res => {
          console.log(res.data);
          window.location.reload();
        });
    }
   
    return (          
    <Grid container >
      
      <TopBar />

      {produtos.map((Produto) => (
      <Card key={Produto.idProduto} className={classes.root}>

      <CardActionArea>
         <CardMedia className={classes.media}image={Produto.enderecoImagem}title="Foto do Produto"/>
         <CardContent>
           <Typography gutterBottom variant="h5" component="h2">
           {Produto.nome}
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
           Cartão do Produto {Produto.nome} Cadastrado no Sistema Inventory.
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
                   <StyledTableCell>Código Produto:</StyledTableCell>
                   <StyledTableCell>{Produto.idProduto}</StyledTableCell>              
                 </StyledTableRow>
                 <StyledTableRow>
                   <StyledTableCell>Quantidade</StyledTableCell>
                   <StyledTableCell>{Produto.quantidade}</StyledTableCell>              
                 </StyledTableRow>
                 <StyledTableRow>
                   <StyledTableCell>Nome:</StyledTableCell>
                   <StyledTableCell>{Produto.nome}</StyledTableCell>              
                 </StyledTableRow>
                 <StyledTableRow>
                   <StyledTableCell>Valor:</StyledTableCell>
                   <StyledTableCell>{Produto.valor}</StyledTableCell>              
                 </StyledTableRow>
                 <StyledTableRow>
                   <StyledTableCell>Validade:</StyledTableCell>
                   <StyledTableCell>{Produto.validade}</StyledTableCell>              
                 </StyledTableRow>
                 <StyledTableRow>
                   <StyledTableCell>Data Entrada:</StyledTableCell>
                   <StyledTableCell>{Produto.dataEntrada}</StyledTableCell>              
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
                     <StyledTableCell>Código Produto:</StyledTableCell>
                     <TextField defaultValue={Produto.idProduto}variant="outlined" disabled/> 
                   </StyledTableRow>
                   <StyledTableRow>
                     <StyledTableCell>Quantidade:</StyledTableCell>
                     <TextField defaultValue={Produto.quantidade}variant="outlined"/>             
                   </StyledTableRow>
                   <StyledTableRow>
                     <StyledTableCell>Nome:</StyledTableCell>
                     <TextField defaultValue={Produto.nome}variant="outlined"/>             
                   </StyledTableRow>
                   <StyledTableRow>
                     <StyledTableCell>Validade:</StyledTableCell>
                     <TextField defaultValue={Produto.validade}variant="outlined"/>             
                   </StyledTableRow>
                   <StyledTableRow>
                     <StyledTableCell>Data Entrada:</StyledTableCell>
                     <TextField defaultValue={Produto.dataEntrada}variant="outlined"/> 
                             
                   </StyledTableRow>
                   <StyledTableRow>
                     <StyledTableCell>Link Imagem:</StyledTableCell>
                     <TextField  defaultValue={Produto.enderecoImagem}variant="outlined"/>         
                   </StyledTableRow>                    
                 </TableBody>
               </Table>
             </ExpansionPanelDetails>
           </ExpansionPanel>
         </CardActions>
         <CardActions >   
           <Button variant="contained" color="primary" size="large" onClick={() =>deleteProduto(Produto.idProduto)}>
           Excluir    
           </Button>         
         </CardActions> 
         
     </Card>
      ))}
        
      <BottomBar />

    </Grid>
    );
  }

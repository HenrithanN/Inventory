import React from 'react';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import {Typography, Grid, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import TopBar from '../../components/Bars/TopBar';
import BottomBar from '../../components/Bars/BottomBar';

export default function MenuListComposition() {
  
  const useStyles = makeStyles((theme) => ({
    root: {
      width: 425,    
      margin: theme.spacing(1),
      flexDirection:'column',
    },
    media: {
      height: 200,
    },
    Btns: {
      width: 185,
      height:50,    
      margin: theme.spacing(1),
      flexDirection:'column',
    },
    Btns2: {
      width: 185,
      height:100,    
      margin: theme.spacing(1),
      flexDirection:'column',
    }
  }));
  const classes = useStyles();


  return (
  <Grid container  direction="row" >

    <TopBar/>

      <Card className={classes.root}>
        <CardActionArea>        
          <CardMedia className={classes.media}image="https://wbweb.com.br/images/blog/cliente-ideal-voce-sabe-quem-e.jpg"title="CardClientes"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Clientes
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Clientes Cadastrados no Sistema de Controle de Estoque 
            Inventory.
            Clique Abaixo para mais informações.
            </Typography>
          </CardContent>
        </CardActionArea>
          <CardActions>
            <Link to="/Clientes" style={{ color: 'inherit' , textDecoration: 'none' } }>
              <Button className={classes.Btns2}variant="contained" color="primary" size="large" >Visualizar Todos</Button>
            </Link>
            <Link to="/CriarCliente" style={{ color: 'inherit' , textDecoration: 'none' } }>
              <Button className={classes.Btns2}variant="contained" color="primary" size="large" >Cadastrar Novo</Button>
            </Link>
          </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media}image="https://chiptronic.com.br/blog/wp-content/uploads/2019/02/fornecedores.jpg"title="CardFornecedores"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Fornecedores
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Fornecedores Cadastrados no Sistema de Controle de Estoque 
            Inventory.
            Clique Abaixo para mais informações.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/Fornecedores" style={{ color: 'inherit' , textDecoration: 'none' } }>
            <Button className={classes.Btns2}variant="contained" color="primary" size="large">Visualizar Todos</Button>
          </Link>
          <Link to="/CriarFornecedor" style={{ color: 'inherit' , textDecoration: 'none' } }>
            <Button className={classes.Btns2}variant="contained" color="primary" size="large">Cadastrar Novo</Button>
          </Link>      
        </CardActions>
      </Card>
      
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media}image="https://mfconsultoria.org/wp-content/uploads/2017/11/inventory-management.png"title="CardVendedores"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Vendedores
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Vendedores Cadastrados no Sistema de Controle de Estoque 
            Inventory.
            Clique Abaixo para mais informações.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/Vendedores" style={{ color: 'inherit' , textDecoration: 'none' } }>
            <Button className={classes.Btns2}variant="contained" color="primary" size="large">Visualizar Todos</Button>
          </Link>
          <Link to="/CriarVendedor" style={{ color: 'inherit' , textDecoration: 'none' } }>
            <Button className={classes.Btns2} variant="contained" color="primary" size="large">Cadastrar Novo</Button>
          </Link>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media}image="https://www.sindifisco-am.com.br/wp-content/uploads/2018/03/0cbecdd358624ee66759528aec6fc577.jpg"title="CardVendas"/>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              Vendas
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              Vendas Realizadas no Sistema de Controle de Estoque 
              Inventory.
              Clique Abaixo para mais informações.
              </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/Vendas" style={{ color: 'inherit' , textDecoration: 'none' } }>
            <Button className={classes.Btns2}variant="contained" color="primary" size="large">Visualizar Todos</Button>
          </Link>
          <Link to="/CriarVenda" style={{ color: 'inherit' , textDecoration: 'none' } }>
            <Button className={classes.Btns2}variant="contained" color="primary" size="large">Cadastrar Novo</Button>
          </Link>
        </CardActions>
      </Card>
      
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media}image="https://images-americanas.b2w.io/produtos/01/00/oferta/44094/0/44094079_1GG.jpg"title="CardProdutos"/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Produtos
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Produtos Cadastrados no Sistema de Controle de Estoque 
            Inventory.
            Clique Abaixo para mais informações.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/Produtos" style={{ color: 'inherit' , textDecoration: 'none' } }>
            <Button className={classes.Btns}variant="contained" color="primary" size="large">Visualizar Todos</Button>
          </Link>
          <Link to="/CriarProduto" style={{ color: 'inherit' , textDecoration: 'none' } }>
            <Button className={classes.Btns}variant="contained" color="primary" size="large">Cadastrar Novo</Button>
          </Link>
        </CardActions>
        <CardActions>
        <Link to="/Produtos-Vencendo" style={{ color: 'inherit' , textDecoration: 'none' } }>
            <Button className={classes.Btns}variant="contained" color="secondary" size="large">Validade Acabando</Button>
        </Link>
        <Link to="/Produtos-Vencidos" style={{ color: 'inherit' , textDecoration: 'none' } }>
            <Button className={classes.Btns}variant="contained" color="secondary" size="large">Produtos Vencidos</Button>
        </Link>
        </CardActions>
        <CardActions>
        <Link to="/Produtos-Acabando" style={{ color: 'inherit' , textDecoration: 'none' } }>
            <Button className={classes.Btns}variant="contained" color="secondary" size="large">Produtos Acabando</Button>
        </Link>
        <Link to="/Estoque-zerado" style={{ color: 'inherit' , textDecoration: 'none' } }>
            <Button className={classes.Btns}variant="contained" color="secondary" size="large">Estoque Zerado </Button>
        </Link>
        </CardActions>
      </Card>
    <BottomBar/>
  </Grid >
            
  );
}

import React,{ useState} from 'react';
import { makeStyles,Button, Grid, Typography } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import BottomBar from '../../components/Bars/BottomBar';
import TopBar from '../../components/Bars/TopBar';
import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
  Nomail: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
  CpRG: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '24ch',
    },
  },  
  media: {
    margin: theme.spacing(1),
    height: 200,
  },
  
}));

export default function CriarProduto() {
  const classes = useStyles();
  
  const [quantidade,updateQtd] = useState('');
  const handleQtdChange = event => updateQtd(event.target.value)
  
  const [nome,updateNome] = useState('');
  const handleNomeChange = event => updateNome(event.target.value)
  
  const [validade,updateValidade] = useState('');
  const handleValidadeChange = event => updateValidade(event.target.value)
  
  const [dataEntrada,updateDataEntrada] = useState('');
  const handleDataEChange = event => updateDataEntrada(event.target.value)

  const [enderecoImagem,updateImagem] = useState('');
  const handleImagemChange = event => updateImagem(event.target.value)
  
  
  const createProduct = () => {
    api.post('/Produto/Salvar',{ nome:nome,quantidade:quantidade, validade:validade,dataEntrada:dataEntrada,enderecoImagem:enderecoImagem})
    .then(res => {
      console.log(res.data);  
      alert('Cadastrado com Sucesso');
  });
    
}
const handleSubmit = event =>{
  event.preventDefault()
}
  return (
    <Grid>
    <form align="center" onSubmit={handleSubmit} >
      <TopBar />
      <img className={classes.media}src="https://images-americanas.b2w.io/produtos/01/00/oferta/44094/0/44094079_1GG.jpg"alt="ProdutosImg"/>
      
      <Typography color="textSecondary"variant="h5">Formulario para Cadastro de novos Produtos</Typography>

      
      <div className={classes.Nomail} >
        <label>
          <TextField label="Nome do Produto"onChange={handleNomeChange}placeholder="Digite o Nome do Produto" value={nome}variant="outlined"/>
        </label>             
      </div>
      <div className={classes.CpRG}>
        <label>
          <TextField value={quantidade}label="Quantidade"onChange={handleQtdChange}placeholder="Digite a Quantidade"variant="outlined"/>
        </label>
        <label>
          <TextField value={validade}label="Validade" onChange={handleValidadeChange}placeholder="Digite a Validade"variant="outlined"/>
        </label>
      </div>  
      <div className={classes.Nomail} >   
        <label>
          <TextField value={dataEntrada} onChange={handleDataEChange}label="Data de Entrada"placeholder="Digite a Data de Entrada"variant="outlined"/>
        </label> 
      </div>       
      <div className={classes.Nomail} >   
        <label>
          <TextField value={enderecoImagem} onChange={handleImagemChange}  label="Endereço de Imagem"placeholder="Cole o Link da sua Imagem de Perfil"variant="outlined"/>
        </label> 
      </div> 
      <div align="center">
      <Button variant="contained" color="primary" size="large" type="submit"onClick={createProduct}>
          Salvar Novo Produto
          </Button>
      </div>
      
    </form>
    <br/>
    <BottomBar />
    </Grid>
  );
}
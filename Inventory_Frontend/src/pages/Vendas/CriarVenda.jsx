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

export default function CriarVenda() {
  const classes = useStyles();
  
  const [codProduto,updatecodProduto] = useState('');
  const handleCodProdChange = event => updatecodProduto(event.target.value)
  
  const [codCliente,updateCodCliente] = useState('');
  const handleCodCliChange = event => updateCodCliente(event.target.value)
  
  const [qtdVendida,updateQtdVendida] = useState('');
  const handleQtdVendChange = event => updateQtdVendida(event.target.value)
  
  const [valorTotal,updateValorTotal] = useState('');
  const handleValorTChange = event => updateValorTotal(event.target.value)
  
  const [dataVenda,updateDataVenda] = useState('');
  const handleDataVChange = event => updateDataVenda(event.target.value)
  
  const [descricao,updateDescricao] = useState('');
  const handleDescricaoChange = event => updateDescricao(event.target.value)

  
  const createSales = () => {
    api.post('/Venda/Salvar',{ qtdVendida:qtdVendida,codProduto:codProduto, codCliente:codCliente,valorTotal:valorTotal,dataVenda:dataVenda,descricao:descricao,enderecoImagem:"https://www.moblee.com.br/blog/wp-content/uploads/sites/2/2018/03/Venda-de-ingressos-online-1-8.png"})
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
      <img className={classes.media}src="https://www.sindifisco-am.com.br/wp-content/uploads/2018/03/0cbecdd358624ee66759528aec6fc577.jpg"alt="VendasImg"/>
      
      <Typography color="textSecondary"variant="h5">Formulario para Registro de Vendas</Typography>

      
      <div className={classes.Nomail} >
        <label>
          <TextField label="Data de Venda"onChange={handleDataVChange}placeholder="Digite a data de Venda" value={dataVenda}variant="outlined"/>
        </label>             
      </div>
      <div className={classes.CpRG}>
        <label>
          <TextField value={codCliente}label="Código Cliente"onChange={handleCodCliChange}placeholder="Digite o Código do Cliente"variant="outlined"/>
        </label>
        <label>
          <TextField value={codProduto}label="Código Produto" onChange={handleCodProdChange}placeholder="Digite o Código do Produto"variant="outlined"/>
        </label>
      </div>
      <div className={classes.Nomail} >   
        <label>
          <TextField value={descricao} onChange={handleDescricaoChange}  label="Descrição Saída"placeholder="Descreva a Saída"variant="outlined"/>
        </label> 
      </div>   
      <div className={classes.CpRG}>
        <label>
          <TextField value={qtdVendida}label="Quantidade Vendida"onChange={handleQtdVendChange}placeholder="Informe a Quantidade Vendida"variant="outlined"/>
        </label>
        <label>
          <TextField value={valorTotal}label="Valor Total" onChange={handleValorTChange}placeholder="Informe o Valor Total"variant="outlined"/>
        </label>
      </div>       
      
      <div align="center">
      <Button variant="contained" color="primary" size="large" type="submit"onClick={createSales}>
          Registrar Nova Venda
          </Button>
      </div>
      
    </form>
    <br/>
    <BottomBar />
    </Grid>
  );
}
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
    height: 200,
    margin: theme.spacing(2),
  },
}));

export default function CriarVendedor() {
  const classes = useStyles();
  
  const [nome,updateNome] = useState('');
  const handleNomeChange = event => updateNome(event.target.value)
  
  const [telefoneFixo,updateTFixo] = useState('');
  const handleTFChange = event => updateTFixo(event.target.value)
  
  const [email,updateEmail] = useState('');
  const handleEmailChange = event => updateEmail(event.target.value)

  const [enderecoImagem,updateImagem] = useState('');
  const handleImagemChange = event => updateImagem(event.target.value)
  
  const [cnpj,updateCNPJ] = useState('');
  const handleCNPJChange = event => updateCNPJ(event.target.value)
  
  const createSalesman = () => {
    api.post('/Vendedor/Salvar',{ nome:nome,telefoneFixo:telefoneFixo, email:email,cnpj:cnpj,enderecoImagem:enderecoImagem})
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
      <img className={classes.media}src="https://mfconsultoria.org/wp-content/uploads/2017/11/inventory-management.png"alt="VendedoresImg"/>
      <Typography color="textSecondary"variant="h5">Formulario para Cadastro de novos Vendedores</Typography>
      
      <div className={classes.Nomail} >
        <label>
          <TextField label="Nome Completo"onChange={handleNomeChange}placeholder="Informe o Nome" value={nome}variant="outlined"/>
        </label>             
      </div>
      <div className={classes.Nomail}>
        <label>
          <TextField value={cnpj}label="CNPJ"onChange={handleCNPJChange}placeholder="Informe o CNPJ"variant="outlined"/>
        </label>        
      </div>  
      <div className={classes.Nomail} >   
        <label>
          <TextField value={email} onChange={handleEmailChange}label="Email"placeholder="Digite seu Email"variant="outlined"/>
        </label> 
      </div> 
      <div className={classes.Nomail}>        
        <label>
          <TextField value={telefoneFixo}label="Telefone Fixo" onChange={handleTFChange}placeholder="Digite seu Telefone"variant="outlined"/>
        </label>
      </div>        
      <div className={classes.Nomail} >   
        <label>
          <TextField value={enderecoImagem} onChange={handleImagemChange}  label="Endereço de Imagem"placeholder="Cole o Link da sua Imagem de Perfil"variant="outlined"/>
        </label> 
      </div> 
      <div align="center">
      <Button variant="contained" color="primary" size="large" type="submit"onClick={createSalesman}>
          Salvar Novo Vendedor
          </Button>
      </div>
      
    </form>
    <br/>
    <BottomBar />
    </Grid>
  );
}
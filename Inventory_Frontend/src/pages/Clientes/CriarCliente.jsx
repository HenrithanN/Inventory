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

export default function CriarCliente() {
  const classes = useStyles();
  
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
  
  const createUser = () => {
    api.post('/Cliente/Salvar',{ nome:nome,telefoneFixo:telefoneFixo, telefoneCelular:telefoneCelular,email:email,rg:rg,cpf:cpf,endereco:endereco,enderecoImagem:enderecoImagem})
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
      <img className={classes.media}src="https://wbweb.com.br/images/blog/cliente-ideal-voce-sabe-quem-e.jpg"alt="ClientesImg"/>
      <Typography color="textSecondary"variant="h5">Formulario para Cadastro de novos Clientes</Typography>
      
      <div className={classes.Nomail} >
        <label>
          <TextField label="Nome Completo"onChange={handleNomeChange}placeholder="Digite seu Nome" value={nome}variant="outlined"/>
        </label>             
      </div>
      <div className={classes.CpRG}>
        <label>
          <TextField value={cpf}label="CPF"onChange={handleCPFChange}placeholder="Digite seu CPF"variant="outlined"/>
        </label>
        <label>
          <TextField value={rg}label="RG" onChange={handleRGChange}placeholder="Digite seu RG"variant="outlined"/>
        </label>
      </div>  
      <div className={classes.Nomail} >   
        <label>
          <TextField value={email} onChange={handleEmailChange}label="Email"placeholder="Digite seu Email"variant="outlined"/>
        </label> 
      </div> 
      <div className={classes.CpRG}>
        <label>
          <TextField value={telefoneCelular}label="Telefone Celular"onChange={handleTCChange}placeholder="Digite seu Celular"variant="outlined"/>
        </label>
        <label>
          <TextField value={telefoneFixo}label="Telefone Fixo" onChange={handleTFChange}placeholder="Digite seu Telefone"variant="outlined"/>
        </label>
      </div>  
      <div className={classes.Nomail} >   
        <label>
          <TextField value={endereco} onChange={handleEnderecoChange}label="Endereço"placeholder="Digite seu Endereço"variant="outlined"/>
        </label> 
      </div> 
      <div className={classes.Nomail} >   
        <label>
          <TextField value={enderecoImagem} onChange={handleImagemChange}  label="Endereço de Imagem"placeholder="Cole o Link da sua Imagem de Perfil"variant="outlined"/>
        </label> 
      </div> 
      <div align="center">
      <Button variant="contained" color="primary" size="large" type="submit"onClick={createUser}>
          Salvar Novo Cliente
          </Button>
      </div>
      
    </form>
    <br/>
    <BottomBar />
    </Grid>
  );
}
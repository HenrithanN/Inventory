import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// Produtos
import Produtos from'../pages/Produtos/Produtos';
import ProdutosVencendo from '../pages/Produtos/ProdutosVencendo'
import ProdutosVencidos from '../pages/Produtos/ProdutosVencidos'
import EstoqueZerado from '../pages/Produtos/EstoqueZerado'
import ProdutosAcabando from '../pages/Produtos/ProdutosAcabando'
import CriarProduto from '../pages/Produtos/CriarProduto'
//Clientes
import Clientes from '../pages/Clientes/Clientes'
import CriarCliente from '../pages/Clientes/CriarCliente'
//Fornecedores
import Fornecedores from '../pages/Fornecedores/Fornecedores'
import CriarFornecedor from '../pages/Fornecedores/CriarFornecedor'
//Vendedores
import Vendedores from '../pages/Vendedores/Vendedores'
import CriarVendedor from '../pages/Vendedores/CriarVendedor'
//Vendas
import Vendas from '../pages/Vendas/Vendas'
import CriarVenda from '../pages/Vendas/CriarVenda'
//Principal
import Principal from '../pages/Principal/Principal'

const Routes = () =>(
    <BrowserRouter>
        <Switch>
            {/* Produtos */}
            <Route exact path="/CriarProduto" component={CriarProduto} />                   
            <Route exact path="/Produtos-Acabando" component={ProdutosAcabando} />            
            <Route exact path="/Estoque-zerado" component={EstoqueZerado} />
            <Route exact path="/Produtos-Vencidos" component={ProdutosVencidos} />
            <Route exact path="/Produtos-Vencendo" component={ProdutosVencendo} />
            <Route exact path="/Produtos" component={Produtos} />
            {/* Clientes */}
            <Route exact path="/Clientes" component={Clientes} />
            <Route exact path="/CriarCliente" component={CriarCliente} />
            {/* Fornecedores */}
            <Route exact path="/Fornecedores" component={Fornecedores} />
            <Route exact path="/CriarFornecedor" component={CriarFornecedor} />
            {/* Vendedores */}
            <Route exact path="/Vendedores" component={Vendedores} />
            <Route exact path="/CriarVendedor" component={CriarVendedor} />
            {/* Vendas */}
            <Route exact path="/Vendas" component={Vendas} />
            <Route exact path="/CriarVenda" component={CriarVenda} />
            {/* Principal */}
            <Route exact path="/" component={Principal} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
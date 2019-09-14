import React from 'react';
import{BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Listagem from './Listagem'
import FormIncluir from './FormIncluir'
import FormPesquisar from './FormPesquisar'


function App() {
  return (
    <Router>
    <Header />
    <Route path='/' exact component={Home}/>
    <Route path='/listar' exact component={Listagem}/>
    <Route path='/incluir' exact component={FormIncluir}/>
    <Route path='/pesquisar' exact component={FormPesquisar}/>

    </Router>
  );
}

export default App;

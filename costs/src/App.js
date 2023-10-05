import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom';

/* Importação das paginas que estao com os conteudos que o navbar o oferce, todos os conteudos de cada opção disponivel na página, ao clicar em em alguma opcao do navbar os vera  =) */ 
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

/* importação do fotter e navbar da pagina, com o container filhos para ao clicar nas opcoes do navbar a página permanecer com os mesmo layout */

import Container from './components/layout/Container';
import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer'



function App() {
  return (
    <Router>
      
      <NavBar/>

      <Switch>
        <Container customClass="min-height">

          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/projects'>
            <Projects />
          </Route>

          <Route exact path='/company'>
            <Company />
          </Route>

          <Route exact path='/contact'>
            <Contact />
          </Route>   

          <Route exact path='/newproject'>
            <NewProject />
          </Route>

       </Container>

      </Switch> 

      <Footer/>       
    </Router>


  );
}

export default App;

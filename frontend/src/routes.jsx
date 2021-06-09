import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './pages/Home';
import NurseAcess from './pages/NurseAccess';
import UserAcess from './pages/UserAccess';
import NotFound from './pages/NotFound';
import AcessoMedico from './pages/AcessoMedico';
import AcessoRecep from './pages/AcessoRecep';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/agendamento/:id' component={UserAcess} />
      <Route exact path='/agendamento' component={NurseAcess} />
      <Route exact path='/acessoMedico' component={AcessoMedico} />
      <Route exact path='/acessoRecep' component={AcessoRecep} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
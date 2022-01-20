import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderForm from './components/HeaderForm';
import People from './views/People';
import Planets from './views/Planets';
import Starships from './views/Starships';

function App() {
  return (
    <BrowserRouter>
      <div className="container mt-5">
        <HeaderForm />
        <Switch>
          <Route path="/people/:id">
            <People />
          </Route>
          <Route path="/planets/:id">
            <Planets />
          </Route>
          <Route path="/starships/:id">
            <Starships />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

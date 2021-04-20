import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import CharacterDetails from "./components/CharacterDetails";
import CharacterList from './components/CharacterList';
import Home from './components/Home';
import Navigation from "./components/Navigation";
import NoMatch from './components/NoMatch';

function App() {

  return (
    <Router>
      <div className='App'>
        <Navigation />
        <Switch>
          <Route exact path="/characters">
            <CharacterList />
          </Route>
          <Route path="/characters/:characterName" component={CharacterDetails} />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <p>Copyright nada</p>
      </div>
    </Router>
  );
}

export default App;

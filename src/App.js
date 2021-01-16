import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Auth from './pages/Auth';
import Counter from './pages/Counter';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Router path="/counter">
          <Counter />
        </Router>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route>
          <h4>No Match</h4>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

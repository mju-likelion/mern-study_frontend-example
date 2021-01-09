import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <h4>Log In Page</h4>
        </Route>
        <Route>
          <h4>No Match</h4>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

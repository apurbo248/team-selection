import './App.css';
import AllLeages from './Component/AllLeage/AllLeages';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PageNotFound from './Component/PageNotFound/PageNotFound';
import TeamsDetails from './Component/TeamsDetails/TeamsDetails';
function App() {
  return (
    <div>
        <Router>
        <Switch>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/Team/:idLeague">
          <TeamsDetails></TeamsDetails>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </Router>
   
    </div>
  );
}

export default App;

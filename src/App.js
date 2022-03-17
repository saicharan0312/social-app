import './App.css';
import { BrowserRouter as Router , Route, Redirect, Switch } from "react-router-dom";
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import UpdateJson from './places/pages/UpdateJson';
import  MainNavigation  from './shared/components/Navigation/MainNavigation';
import UpdatePlaces from './places/pages/UpdatePlaces';

const  App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Switch>
        <Route path="/" exact>
          <Users /> 
        </Route>
        <Route path= '/:userId/places' exact>
          <UserPlaces />
        </Route>
        <Route path="/updateJson" exact>
          <UpdateJson />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Route path="/places/:placeId" exact>
          <UpdatePlaces />
        </Route>
        <Redirect to = "/" />
      </Switch>
      </main>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import Home from './Components/Home/Home';
import NotFound from './Components/NotFoud/NotFound';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import ManageAllOrder from './Components/ManageAllOrder/ManageAllOrder';

function App() {
  return (
      <BrowserRouter>

      <Switch>

        <Route exact path='/'>
          <Home></Home>
        </Route>

        <Route exact path='/home'>
          <Home></Home>
        </Route>


        <Route exact path='/placeorder/:id'>
        <PlaceOrder></PlaceOrder>
        </Route>



        <Route path='/manage-all-orders'>

          <ManageAllOrder></ManageAllOrder>

        </Route>

































        <Route path='*'>
          <NotFound></NotFound>
        </Route>



























      </Switch>












    </BrowserRouter>
  );
}

export default App;

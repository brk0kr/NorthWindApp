import React from 'react'
import Navi from '../navi/Navi'
import Dashboard from './Dashboard'
import {Route,Switch} from "react-router-dom"
import CartDetail from "../cart/CartDetail"

function App() {
  return (
    <div>
 <Navi/>
 <Switch>
 <Route path="/" exact component={Dashboard}/>
 <Route path="/cart" exact component={CartDetail}/>
 </Switch>
    </div>
  );
}

export default App;

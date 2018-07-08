import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import App from '../../containers/app';
import Navbar from '../navbar/navbar';

interface PathingProps {

}

const Pathing: React.SFC<PathingProps> = () => 
  <>
    <Navbar />
    <Switch>
      <Route path="/" exact={true} component={App}/>
      <Route path="/test" render={() => <h3>Test</h3>}/>
      <Redirect to="/" />
    </Switch>
  </>;

export default Pathing;
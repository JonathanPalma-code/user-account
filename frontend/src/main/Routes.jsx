import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/Home';
import UserCrud from '../components/users/UserCRUD';
import Dashboard from '../components/dasboard/Dashboard';

const routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/users' component={UserCrud} />
      <Route path='/dashboard' component={Dashboard} />
      <Redirect from='*' to='/' />
    </Switch>
  )
} 

export default routes;

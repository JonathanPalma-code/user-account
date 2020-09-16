import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Home from '../components/home/Home';
import UserCrud from '../components/users/UserCRUD';
import Dashboard from '../components/dasboard/Dashboard';
import PostDetails from '../components/posts/PostDetails';
import CreatePost from '../components/posts/CreatePost';
import Map from '../components/map/Map';
import UserDetails from '../components/users/UserDetails';
import VerifyEmail from '../components/auth/VerifyEmail';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/verifyemail' component={VerifyEmail} />
      <Route path='/users' component={UserCrud} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/post/:id' component={PostDetails} />
      <Route path='/createpost' component={CreatePost} />
      <Route path='/map' component={Map}  />
      <Route path='/:firstname:lastName' component={UserDetails} />
      <Redirect from='*' to='/' />
    </Switch>
  )
} 

export default Routes;

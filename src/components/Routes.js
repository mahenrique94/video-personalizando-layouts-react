import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

import About from '../pages/About'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Login from '../pages/Login'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </BrowserRouter>
)

export default Routes

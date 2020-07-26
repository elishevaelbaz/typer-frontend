import React, {Component} from 'react'
import SideBar from './SideBar'
import Home from './Home'
import Profile from './Profile'
import Scoreboard from './Scoreboard'
import GameBoard from './GameBoard'
// import SignUp from './SignUp'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'

export default class Main extends Component {


  render () {
    return (
      <BrowserRouter>
        <main>
          <SideBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/scoreboard" component={Scoreboard} />
            <Route path="/games/:id" render={routeProps => (
              <GameBoard {...routeProps} />
              )} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

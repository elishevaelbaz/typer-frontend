
import React, {Component} from 'react'
import "./App.css"
import SideBar from './components/SideBar'
import Home from './components/Home'
import Profile from './components/Profile'
import Scoreboard from './components/Scoreboard'
import GameBoard from './components/GameBoard'
import SignUp from './components/SignUp'
import Login from './components/Login'
import AddPassage from './components/AddPassage'
import { autoLogin, logout } from './fetches'

import {
  BrowserRouter,
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom'

class App extends Component {

  state = {
    currentUser: null,
    message: null
  }

  //log in user when component mounts
  componentDidMount(){
    autoLogin()
      .then(user => {
        this.handleLogin(user)
      })
      .catch((err) => console.error(err))
  }

  handleLogin = (currentUser) => {
    this.setState({
      currentUser,
      message: null
    })
  }

  handleLogout = () => {
    logout()
    .then(logoutResponse => {
      this.setState({
        currentUser: null,
        message: logoutResponse.message
      })
    })
  }

  render () {
    console.log("in main, state:", this.state)
    return (
      <div className="App">

     
      <BrowserRouter >
        <main>
          <SideBar currentUser={this.state.currentUser} handleLogout={this.handleLogout}/>
          <Switch>

            <Route exact path="/" render={routeProps => (
              <Home {...routeProps}
                currentUser={this.state.currentUser}
                message={this.state.message}
              />
              )}/>
            
            <Route path="/login">
            {this.state.currentUser ?  <Redirect to='/' /> : <Login handleLogIn={this.handleLogin} /> }
          </Route>

            <Route path="/signup">
              {this.state.currentUser ?  <Redirect to='/' /> : <SignUp handleLogIn={this.handleLogin}/> }
            </Route>

            <Route path="/profile">
              {this.state.currentUser ? <Profile currentUser={this.state.currentUser} /> : <Redirect to='/login' />}
            </Route>
            <Route path="/scoreboard" component={Scoreboard} />
            <Route path="/addpassage" component={AddPassage} />

            {/* <Route path="games/:id">
              {this.state.currentUser ?  <Profile currentUser={this.state.currentUser} /> : <Redirect to='/login' />}
            </Route> */}
            <Route path="/games/:id" render={routeProps => (
              <GameBoard {...routeProps} />
              )} />
          </Switch>
        </main>
      </BrowserRouter>
      </div>
    )
  }
}

export default withRouter(App);


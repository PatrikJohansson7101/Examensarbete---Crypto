import React from "react"
import Signup from "./HandleUser/Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./HandleUser/Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./HandleUser/ForgotPassword"
import UpdateProfile from "./Header/UpdateProfile"
import Firstpage from "./Main/Firstpage";
import Header from './Header/Header';

/* PrivateRoute används för sidor där användaren måste vara inloggad i firebase för att kunna nå sidan */

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center main-container"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "600px" }}>
        <Router>
          <AuthProvider>
            <Header/>
            <Switch>
              <PrivateRoute exact path="/" component={Firstpage} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App

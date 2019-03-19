import React from 'react';
import './App.css';
import Inmates from './components/Inmates';
import InmatesForm from './components/InmatesForm';
import {getData} from './actions';
import {connect } from 'react-redux'

import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'

class App extends React.Component {

  componentDidMount() {
    this.props.getData()
  }

  render() {
    return (

      <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/protected" component={GasPrices} />
      </div>
    



      <div className="App">
        <h1>Prison Employment Connection</h1>
        <InmatesForm />
        <div>
          <Inmates inmates={this.props.inmates}/>
        </div>
      </div>
      </Router>
    );
  }
}


const mapStateToProps = state => {
  const {inmateReducer} = state;
  return {
    inmates: inmateReducer.inmates,
    error: inmateReducer.error,
    gettingData: inmateReducer.gettingData
  }
}

export default connect(mapStateToProps, {getData})(App)

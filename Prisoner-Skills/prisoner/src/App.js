import React from 'react';
import './App.css';
import Inmates from './components/Inmates';
import InmatesForm from './components/InmatesForm';
import {getData} from './actions';
import {connect } from 'react-redux'

class App extends React.Component {

  componentDidMount() {
    this.props.getData()
  }

  render() {
    return (
      <div className="App">
        <h1>Prison Employment Connection</h1>
        <InmatesForm />
        <div>
          <Inmates inmates={this.props.inmates}/>
        </div>
      </div>
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

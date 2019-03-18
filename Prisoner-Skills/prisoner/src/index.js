import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import reducer from './reducers'
import {createStore} from 'redux'
import './index.css';
import App from './App';

const store = createStore(reducer)


ReactDOM.render(
<Provider>
<App />
</Provider>, 
document.getElementById('root'));



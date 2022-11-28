import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const INITIAL_STATE = {

}

function Reducer (state = INITIAL_STATE, action) {
  if(true){
    return state;
  }
  else{
    return state;
  }
}
const store = createStore(Reducer);
ReactDOM.render(
  <BrowserRouter>
    <Provider store = {store}>
      <App/>
    </Provider>
  </BrowserRouter>
  ,document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

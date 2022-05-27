import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk  from 'redux-thunk';
import { searchRobots, requestRobots } from './reducers';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import App from './containers/App';


//middleware to log redux state changes in console
const logger = createLogger()

//each reducers adds its own object - i.e piece of state -  to the store
const rootReducer = combineReducers({searchRobots, requestRobots})

//store is passed as props to the Provider component allowing store access to all descendents of it
// using the Connect API. Thunk middleware allows async behaviour such as AJax requests to interact with the store
const store = createStore(rootReducer, applyMiddleware(thunk))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store} >
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

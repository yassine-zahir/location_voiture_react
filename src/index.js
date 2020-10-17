import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {VehicleProvider} from './Context';
import {createStore} from 'redux';
import allReducers from './reducers'
import {Provider} from 'react-redux';
import { storeDate } from './actions';



const store = createStore(allReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())



ReactDOM.render(

   
  <VehicleProvider>
   <Provider store={store}>
      
        <App />
    
   </Provider>
  </VehicleProvider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

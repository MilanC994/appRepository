import React from 'react';
import store from './redux/store';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Coins from './components/Coins';

import Background from './imgs/background.jpeg'


function App() {

  return (
    <Provider store={store}>
    <div  className="App">
      <Coins/>
    </div>
    </Provider>
  );
}

export default App;

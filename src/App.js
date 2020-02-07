import React from 'react';
import store from './redux/store';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Coins from './components/Coins';

import Background from './imgs/background.jpeg'


function App() {
  const style={
    backgroundImage: "url(" + Background + ")",
   backgroundPosition: 'center',
   backgroundSize: 'cover',
   backgroundRepeat: 'repeat',
   height:'100vh'
 
}
  return (
    <Provider store={store}>
    <div style={style}  className="App">
      <Coins/>
    </div>
    </Provider>
  );
}

export default App;

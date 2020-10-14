import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import { config as reactParseConfig, setReactParseDispatch } from 'react-parse';
import App from './App.js';

class Main extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}


const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
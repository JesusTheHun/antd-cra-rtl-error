import React from 'react';
import logo from './logo.svg';
import './App.css';
import antdLocaleEnUS from 'antd/es/locale/en_US';
import {ConfigProvider} from "antd";

function App() {
  return (
    <ConfigProvider locale={antdLocaleEnUS}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ConfigProvider>
  );
}

export default App;

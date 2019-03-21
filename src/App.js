import React, { Component } from 'react';
import './App.css';
import Dropzone from './Dropzone';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>🧰</span>
        </header>
        <main>
          <section className="App-main">
            <Dropzone />
          </section>
        </main>
        <footer className="App-footer">
          <span>🧰</span>
        </footer>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Dropzone from './Dropzone';

class App extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(files) {
    console.log(files);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>🧰</span>
        </header>
        <main>
          <section className="App-main">
            <Dropzone onSubmit={this.onSubmit} />
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

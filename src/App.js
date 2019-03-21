import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import Dropzone from './Dropzone';

class App extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(files) {
    console.log(files);

    let formData = new FormData();
    formData.append('file', files[0]);
    axios.post('http://localhost:5000/upload', formData, { 
      headers: {
      'Content-Type': 'multipart/form-data'
      }
    }).then((res) => {
      console.log(res.data.message);
      toast(res.data.message);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>🧰</span>
        </header>
        <main>
          <ToastContainer />
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

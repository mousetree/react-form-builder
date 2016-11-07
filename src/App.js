import React, { Component } from 'react';
import './App.css';
import * as mock from './mock.js';
import Form from './components/form/Form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


class App extends Component {
  render() {
    const formData = mock.forms[0];
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar title="Form Builder" iconElementRight={<FlatButton label="Save" />}/>
          <div className='App-Contents'>
            <Form {...formData} />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
